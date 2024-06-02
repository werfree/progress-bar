# Example Usage of `react-progress-bar-hook`

This example demonstrates how to use the react-progress-bar-hook package to manage and display a progress bar in a React application. The example sets up a progress bar that increments its progress every second and resets once completed.

## Usage Instructions

1. ### Clone the repository:

```bash
git clone https://github.com/werfree/progress-bar
cd react-progress-bar-hook/example
```

2. ### Install dependencies:
   Ensure you have `react-progress-bar-hook` installed in your project:

```bash
npm install react-progress-bar-hook
```

3. ### Run the example
   Start the development server to see the progress bar in action:

```bash
npm run dev
```

## Explanation

### State Management

- `interval`: Holds the interval ID for clearing it when necessary.

### Hook Usage

- `useProgressBar`: Custom hook to manage the progress bar.

### Lifecycle Management

- `useEffect (initial setup)`: Sets up the total steps and interval for progress.
- `useEffect (on completion)`: Clears the interval and resets the progress bar when loading is complete.

### Rendering

- `ProgressBarComponent`: Renders the progress bar with specified styles.
- `Loading State Display`: Shows the current loading state below the progress bar.

## Customization

You can customize the progress bar's appearance by passing different styles to the ProgressBarComponent:

```typescript
<ProgressBarComponent
  progressBarContainerStyle={{ width: '100%', height: '10px', backgroundColor: 'lightgray' }}
  progressBarElementStyle={{ backgroundColor: 'green' }}
/>
```

Feel free to modify and extend the example to fit your needs. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/werfree/progress-bar.githttps://github.com/werfree/progress-bar.git).
