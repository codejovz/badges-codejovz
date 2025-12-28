# Contributing to badges-codejovz

Thank you for your interest in contributing to the badges-codejovz project! This repository contains a collection of custom badges, primarily in SVG format, for various technologies and tools.

## How to Contribute

### 1. Fork the Repository
- Go to [https://github.com/codejovz/badges-codejovz](https://github.com/codejovz/badges-codejovz)
- Click the "Fork" button in the top right corner to create your own copy of the repository.

### 2. Clone the Repository
- Clone your forked repository to your local machine:
  ```
  git clone https://github.com/YOUR_USERNAME/badges-codejovz.git
  ```
- Navigate to the project directory:
  ```
  cd badges-codejovz
  ```

### 3. Create a New Branch
- Create a new branch for your changes:
  ```
  git checkout -b your-feature-branch
  ```

### 4. Make Your Changes
- Add new badges or modify existing ones following the guidelines below.
- Test your changes to ensure they work correctly.

### 5. Commit Your Changes
- Stage and commit your changes:
  ```
  git add .
  git commit -m "Add your descriptive commit message"
  ```

### 6. Push to Your Fork
- Push your changes to your forked repository:
  ```
  git push origin your-feature-branch
  ```

### 7. Create a Pull Request
- Go to your forked repository on GitHub.
- Click the "Compare & pull request" button.
- Provide a clear description of your changes and submit the pull request.

## Guidelines for New Badges

### Badge Format
- All badges **MUST** be in SVG format.
- Badges should have a **height of 28 pixels**.
- Place new badges in the appropriate directory (e.g., `public/` for web-accessible badges).

### Image Handling
- **No embedded images** in SVG files.
- If images are required, they **MUST** be encoded in base64 format for GitHub to process correctly.
- Use the following format for base64 images:
  ```xml
  <image href="data:image/svg+xml;base64,YOUR_BASE64_ENCODED_SVG_HERE" ... />
  ```

### Badge Style
- Follow the existing badge styles in the repository.
- Ensure badges are visually consistent and readable.
- Test badges across different platforms and devices.

### Naming Convention
- Use descriptive, lowercase filenames with hyphens (e.g., `python-badge.svg`, `react-icon.svg`).
- Include relevant keywords in the filename for easy searching.

## Code of Conduct
- Be respectful and constructive in all interactions.
- Follow GitHub's community guidelines.

## Need Help?
- Open an issue on GitHub if you have questions or need assistance.
- Check existing issues and pull requests for similar contributions.

Thank you for contributing!
