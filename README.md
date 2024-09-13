# Blue Titanium UI

![NPM Version](https://img.shields.io/npm/v/blue-titanium-ui)
![NPM Downloads](https://img.shields.io/npm/dm/blue-titanium-ui)

Blue Titanium UI is a React component library focused around a modern presentation of webpage elements, mostly detailed in the color blue. The components provided are intended to be used immediately after installation to rapidly create dynamic and functional web applications in an efficient manner.

## Table of Contents

- [Installation](#installation)
- [Components](#components)
- [Examples](#examples)
- [Changelog](#changelog)
- [License](#license)
- [Support](#support)
- [Color Key](#color-key)

## Installation

To add this component library to your project, run the following command in your terminal:

```sh
npm i blue-titanium-ui
```

## Components

Listed here is a full list of available components to utilize in your React project.

- Button
  - Standard, but decorative HTML buttons to allow for user interactions.
  - There are three button types available for use: primary, secondary, and delete.
- Card
  - A standard container to isolate pieces of information.
- Chip
  - A smaller container intended to include content such as tags and keywords.
- CodeText
  - A component intended to allow for visualizing code on a webpage.
- Divider
  - A standard horizontal divider allowing for separating paragraphs of text in a visually pleasing manner.
- Heading
  - A decorated HTML header component, compatiable with various sizing options to fit your needs.
- HighlightText
  - A component intended to allow for high-contrast text on a webpage.
- ImageCard
  - Similar to the Card component, but more limited in its applications to contain an image with a caption.
- Input
  - Standard HTML input components.
  - As of the latest version, only text, password, date, and checkbox input types are supported.
- ListCard
  - Similar to the Card component, but more intended for the display of key-value pair information.
- Modal
  - A component intended to hover over all other components to alert users of important interactions and messages before proceeding.
- Navbar
  - A standard component to allow for quickly creating a responsive navigation bar at the top of a webpage.
  - Responsive CSS styling is in place to handle various screen sizes.
  - When applying to your project, utilize the left, center, and right props to automatically space out the components. Ideally, the logo or name of your application should be assigned to the `left` prop.
- ProfilePic
  - A quick-to-access component to display a profile picture on a webpage, compatiable with various sizing options to fit your needs.
- Section
  - A flex-box container to quickly implement into your project without having to create the component yourself.
  - Just insert your components as children of the Section, pass the appropriate styling props, and Blue Titanium UI handles the rest.
- Spinner
  - A standard loading icon equipped with an infinite animation. Utilize this when calling asynchronous functions.
- Statistic
  - A small collection of components intended to display changes in a numerical value.
- Toggle
  - A standard toggle component to indicate a true or false value.

## Examples

The following list is a collection of verified projects that use the Blue Titanium UI component library:

- [F1 Insights Hub](https://mdixey17.github.io/f1-insights-hub/)

## Changelog

With each update, the [changelog](https://github.com/MDixey17/blue-titanium/blob/main/CHANGELOG.md) is updated to provide a quick overview of changes.

## License

This project is licensed under the terms of the [MIT license](https://github.com/MDixey17/blue-titanium/blob/main/LICENSE).

## Support

Support me on [Patreon](https://www.patreon.com/titanhawk17)!

## Color Key

If you are interested in using the hexadecimal values for the colors included in this project, you can find them here!

```
BLUE
blue-one = #5DD2FE
blue-two = #006594
blue-three = #032332

GREY
grey-one = #4A5A67
grey-two = #CCCCCC

WHITE
white-one = #E6E6E6

BLACK
black-one = #0C1921

RED
red-one = #EE2B2B /* Used with the delete button */
```
