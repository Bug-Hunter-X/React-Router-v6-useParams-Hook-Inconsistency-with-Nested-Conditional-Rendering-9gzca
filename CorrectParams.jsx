The issue stems from the component using useParams not always re-rendering when the URL changes.  This can be addressed by ensuring the component's parent re-renders, or by using a solution that forces the component to re-render when the params change.  One approach involves creating a custom hook that tracks changes to the params:

```javascript
import { useParams, useMemo } from 'react-router-dom';

function useStableParams() {
  const params = useParams();
  const stableParams = useMemo(() => ({ ...params }), [params]);
  return stableParams;
}

function MyComponent() {
  const { id } = useStableParams();
  // ... rest of your component ...
}
```

Another solution may involve placing the component using `useParams` more strategically within the route structure, such that any change in the URL directly causes a re-render of the component. For instance, instead of deeply nesting the component, consider restructuring the routing hierarchy to directly render components that utilize `useParams` under an appropriate route.