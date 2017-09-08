# cfqr-data

[![Build Status](https://travis-ci.org/CFQR/cfqr-data.svg?branch=master)](https://travis-ci.org/CFQR/cfqr-data)

> NOTE: This module is meant to use along with the [CFQR-app](https://github.com/CFQR/cfqr-app) application!

This project contains textual and numerical data usable by the CFQR questionnaire application. The repository contains:

- Questions definitions and translations (identifiers, type, answers associated, ...).
- Answers definitions, translations and scores (identifiers, scores associated, ...).
- Questionnaires definitions (identifiers, questions associated, ...).

## How to contribute

The data is entirely containted in `.json` files. These files can be edit directly on Github. You can fork this repository and open a pull-request with your modifications. The repository maintainers will take care of the release produces.

## How to modify a questionnaire

Each questionnaire data is defined in a `.json` file inside the [elements](https://github.com/CFQR/cfqr-data/tree/master/elements) folder. It contains an array of elements that can be titles/subtitles, sections, long text or questions. Please take at the existing questionnaires as an example to create/modify your data.

## How to modify the score

Each questionnaire score is defined in a `.json` file inside the [scores](https://github.com/CFQR/cfqr-data/tree/master/scores) folder. It contains an array of elements with the question identifier and an array of scores. The score index is the same as the answer index you can find in the `elements section` (the first score is the score of the first answer and so on).

## How to modify the translations

Each translation is a folder inside the [translations](https://github.com/CFQR/cfqr-data/tree/master/translations) folder the translations containing the translations of each questionnaire. A questionnaire translation is a `.json` file containing the identifiers of each string and the translation associated.

To create a new translation just copy an existing translation folder, rename it as the new [language culture](https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx) desired and translate the strings inside each `.json` file.

*NOTE: Any un-traslated string will automatically fallback to `en-US` in the main application.*
