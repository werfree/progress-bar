# React ProgressBar Hook

A custom React hook for managing and displaying progress bars in React applications. This hook is designed to simplify the process of tracking progress for asynchronous tasks, such as API calls.

## Installation

You can install the `react-progress-bar-hook` package via npm or yarn:

```bash
npm install react-progress-bar-hook
```

or

```bash
yarn add react-progress-bar-hook
```

## Usage

To use the ProgressBar hook in your React application, simply import it and start using it in your components:

```typescript
import React from "react";
import { useProgressBar, LOADING_STATE } from "react-progress-bar-hook";

const MyComponent = () => {
  const {
    incrementTotalApiCalls,
    incrementCompletedApiCalls,
    progressBarLoadingState,
    ProgressBarComponent
  } = useProgressBar();

  // Example usage:
  // Call incrementTotalApiCalls when initiating an API call
  // Call incrementCompletedApiCalls when an API call is completed

  return (
    <div>
      {/* Your component JSX */}
      <ProgressBarComponent />
    </div>
  );
};
```

## API

## `useProgressBar()`

This hook returns an object with the following properties:

- `incrementTotalApiCalls(inc: number)`: Function to increment the total number of API calls.
- `incrementCompletedApiCalls(n?: number)`: Function to increment the number of completed API calls.
- `progressBarLoadingState`: Current loading state of the progress bar (`LOADING_STATE` enum).
- `ProgressBarComponent`: Component to render the progress bar.

### `ProgressBarComponent`

A component responsible for rendering the progress bar. It accepts the following props:

- `noProgressBarStyle`: Optional CSS styles for the container of the progress bar when it's not displayed.
- `progressBarContainerStyle`: Optional CSS styles for the container of the progress bar.
- `progressBarElementStyle`: Optional CSS styles for the progress bar element.

This component conditionally renders either the `NoProgressBar` component or the `ProgressBar` component based on the progress width and completion state.

## `LOADING_STATE`

An enum representing the loading states of the progress bar:

- `INITIAL`: Initial state.
- `LOADING`: Loading state.
- `COMPLETED`: Completed state.

## Example

For a more detailed example of how to use this hook, check out the [example folder](./example) in this repository.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
