#!/bin/bash

# Check if jq and wget are installed
if ! command -v jq &>/dev/null; then
  echo "jq is not installed. Please install jq before running this script."
  exit 1
fi

if ! command -v wget &>/dev/null; then
  echo "wget is not installed. Please install wget before running this script."
  exit 1
fi

# Check if the correct number of arguments are provided
if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <base_url> <input_json_file> <output_directory>"
  exit 1
fi

base_url="$1"
input_json_file="$2"
output_directory="$3"

# Check if the input JSON file exists
if [ ! -f "$input_json_file" ]; then
  echo "Input JSON file '$input_json_file' not found."
  exit 1
fi

# Check if the output directory exists, create it if it doesn't
if [ ! -d "$output_directory" ]; then
  mkdir -p "$output_directory"
fi

# Use jq to extract the URLs and versions from the JSON file
urls_and_versions=$(jq -r '.manifest.urlVersions | to_entries[] | "\(.key) \(.value)"' "$input_json_file")

counter=0

# Loop through the URLs and versions and download them to the output directory
while read -r path version; do

  ((counter++))

  # Construct the full URL by concatenating the base URL, path, and version
  full_url="${base_url}/${path}${version}"

  # Extract the filename from the URL
  filename=$(basename "$path")

  # Download the file using wget
  wget -P "$output_directory" "$full_url" -O "$output_directory/$filename"
  if [ $? -eq 0 ]; then
    echo "Downloaded: $full_url"
  else
    echo "Failed to download: $full_url"
  fi

  # Exit the loop after the first 3 iterations
  #if [ "$counter" -eq 1 ]; then
  #  break
  #fi
done <<< "$urls_and_versions"

echo "Download completed."
