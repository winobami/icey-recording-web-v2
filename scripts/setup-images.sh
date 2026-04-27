#!/bin/bash
# Download high-res images for the Icey Recording website
# Run this after cloning: bash scripts/setup-images.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$SCRIPT_DIR/../public"

mkdir -p "$PUBLIC_DIR"

echo "Downloading logo.png..."
curl -sL "https://customer-assets.emergentagent.com/wingman/ce51c7ab-e249-485c-bc41-673ab59b196a/attachments/882bf765d16344e183dac8738c4531a4_logo.png" -o "$PUBLIC_DIR/logo.png"

echo "Downloading winobami.jpeg..."
curl -sL "https://customer-assets.emergentagent.com/wingman/ce51c7ab-e249-485c-bc41-673ab59b196a/attachments/6808c25b49594aef9ea13bcfe93e9634_winobami.jpeg" -o "$PUBLIC_DIR/winobami.jpeg"

echo "Done! Images downloaded to public/"
ls -la "$PUBLIC_DIR"