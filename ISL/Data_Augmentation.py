import os
import shutil
import logging
import Augmentor

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

def rename_files_to_shorter_names(directory):
    """
    Renames all files in the given directory to shorter names to avoid Windows MAX_PATH issues.
    """
    for idx, filename in enumerate(os.listdir(directory)):
        file_path = os.path.join(directory, filename)
        if os.path.isfile(file_path):  # Only rename files
            ext = filename.split(".")[-1]  # Get file extension
            new_name = f"img_{idx}.{ext}"  # Rename to shorter format
            new_path = os.path.join(directory, new_name)
            os.rename(file_path, new_path)

def augment_images_for_alphabet(input_base_directory, num_samples=800):
    """
    Augments images for each letter directory from A to Z in the input base directory.

    Args:
    - input_base_directory (str): Base directory containing subdirectories for each letter.
    - num_samples (int): Number of augmented samples to generate for each letter (default: 800).
    """
    for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
        input_directory = os.path.join(input_base_directory, letter)

        # Ensure input directory exists and is not empty
        if not os.path.exists(input_directory) or not os.listdir(input_directory):
            logging.warning(f"Skipping {letter}: Directory does not exist or is empty.")
            continue

        # Rename files to prevent long filename issues
        rename_files_to_shorter_names(input_directory)

        # Ensure output directory exists
        output_directory = os.path.join(input_directory, "output")
        os.makedirs(output_directory, exist_ok=True)

        # Initialize Augmentor pipeline
        p = Augmentor.Pipeline(input_directory, output_directory=output_directory)

        # Set file format to PNG (shorter names)
        p.set_save_format("PNG")

        # Define augmentation operations
        p.rotate(probability=0.7, max_left_rotation=10, max_right_rotation=10)
        p.flip_left_right(probability=0.5)
        p.random_contrast(probability=0.5, min_factor=0.7, max_factor=1.3)

        # Generate augmented images
        logging.info(f"Generating {num_samples} augmented images for {letter}...")

        try:
            p.sample(num_samples)
        except FileNotFoundError as e:
            logging.error(f"FileNotFoundError: {str(e)}. Possible filename too long or path issue.")
            continue

        # Move augmented images to parent directory
        for img_name in os.listdir(output_directory):
            src = os.path.join(output_directory, img_name)
            dst = os.path.join(input_directory, img_name)
            shutil.move(src, dst)

        # Remove 'output' directory after moving files
        shutil.rmtree(output_directory, ignore_errors=True)
        logging.info(f"Augmented images for {letter} saved in {input_directory}")

# Example usage
input_base_dir = r"D:\8th sem project multisign lamguage\ISL MORE ALPHABETS\Data_ISL"  # Use a shorter path to avoid issues
augment_images_for_alphabet(input_base_dir, num_samples=800)
