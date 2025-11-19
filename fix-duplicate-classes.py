#!/usr/bin/env python3
import re
import sys

def fix_duplicate_classes(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix pattern: class="animate-fade-in"\n  spaces... (v-for/other attrs)\n  spaces... class="..."
    # Merge the two class attributes
    pattern = r'class="animate-fade-in"\s*\n(\s+)((?:v-[^=]+=|:[^=]+=|@[^=]+=)[^\n>]+\n\s+)*class="([^"]+)"'
    
    def replace_fn(match):
        indent = match.group(1)
        middle_attrs = match.group(2) or ""
        second_classes = match.group(3)
        return f'class="animate-fade-in {second_classes}"\n{indent}{middle_attrs}'.rstrip('\n' + indent)
    
    content = re.sub(pattern, replace_fn, content)
    
    with open(file_path, 'w') as f:
        f.write(content)
    print(f"Fixed {file_path}")

if __name__ == "__main__":
    import glob
    for file in glob.glob("app/components/*.vue"):
        fix_duplicate_classes(file)

