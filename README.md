# React Router v6 useParams Hook Inconsistency

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6.  The problem arises when the component using `useParams` is not directly rendered by a route, particularly in situations involving nested routing or conditional rendering.  This can result in stale props, causing the component to display outdated data or render incorrectly even after a URL change.

The `IncorrectParams.jsx` file shows the problematic implementation.  `CorrectParams.jsx` provides a solution.

## Problem
The `useParams` hook might not re-render with updated parameters if the parent component doesn't re-render itself. This is especially likely when dealing with nested components, conditional rendering, or using other state management mechanisms that prevent the entire tree from updating.

## Solution
Ensure the component using `useParams` is correctly placed in your routing structure and re-renders when necessary.  For nested components, consider refactoring your routing structure.  Conditional rendering requires careful management of re-rendering behavior to guarantee up-to-date parameters.