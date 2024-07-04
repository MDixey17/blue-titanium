# blue-titanium-ui

The Blue Titanium component library for React JavaScript/TypeScript projects.

_Author:_ Matthew Dixey

## Table of Contents

- [Installation](#installation)
- [Components](#components)
  - [Button](#button)
  - [Chip](#chip)
  - [Heading](#heading)
  - [ImageCard](#imagecard)
  - [Input](#input)
  - [ListCard](#listcard)
  - [Navbar](#navbar)
  - [ProfilePic](#profilepic)
  - [Section](#section)
  - [Spinner](#spinner)
- [Color Key](#color-key)
- [Additional Resources](#additional-resources)

## Installation

To add this component library to your project, run the follow command in your terminal:

```sh
npm install blue-titanium-ui
```

## Components

Listed here is a full list of available components to utilize in your React project.

### Button

There are 3 different styles for the `<Button />` component to use in your project: `primary`, `secondary`, and `delete`. The way in which you utilize these different styles is entirely up to you.

### Chip

There are 2 different styles for the `<Chip />` component to use in your project: `primary` and `secondary`. The way in which you utilize these different styles is entirely up to you.

Common uses for this component are listing tags or key pieces of information about a page.

### Heading

There are several different sizes for this component to fit your different needs. You can also use the blue color that is primarily used throughout this library by passing the `isBlue` prop.

Common uses for this component are displaying it at the top of a page as a title.

### ImageCard

This component is designed to encapsulate an image and give it a caption underneath, but in a small compact manner. Think of this component like a trading card and how it can show a thumbnail and a title in one component.

### Input

Four types are currently supported with the `<Input />` component: `text`, `password`, `date`, and `checkbox`. Utilize this to provide areas for users to input data into your application.

### ListCard

Similar to the [ImageCard](#imagecard) component, you can use this component to encapsulate a set of data and give it a title. The `data` prop needs to be exactly as follows. Otherwise, the component will not function as intended.

```javascript
[
  ["left1", "right1"],
  ["left2", "right2"],
  ["left3", "right3"],
];
```

The `data` prop needs to be an array of arrays that are of length 2 with the data being either `string` or `number`.

### Navbar

This library provides a `<Navbar />` component that can be imported into your project. Three different sections of the navigation bar are supported: `left`, `middle`, and `right`. The only catch is that you need to pass the components (or `ReactNode` object) to the props `left`, `middle`, and `right`.

Mobile support is also provided with this component, saving you time from those annoying `@media` queries and styling.

### ProfilePic

Sometimes we need a quick way to display an individual's image. Luckily, this component just requires an image path, alternate text, and a size, and the rest is taken care of.

### Section

The `<Section />` is intended to be a container for the `Flexbox` CSS API. Quickly add your items as children to this component, provide the correct props, and most of the heavy lifting is done.

### Spinner

The `<Spinner />` component is intended to be used as a loading indicator when loading a webpage or making an API call. Utilize the three sizes (`sm`, `md`, and `lg`) to fit your needs.

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
red-one = #EE2B2B
```

## Additional Resources

- [Tutorial](https://blog.logrocket.com/how-to-build-component-library-react-typescript/)
  - I followed this tutorial with building and deploying this component library.
