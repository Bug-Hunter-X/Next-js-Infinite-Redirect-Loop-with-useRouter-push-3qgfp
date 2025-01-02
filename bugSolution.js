```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Check if the pathname is already '/' before pushing
    if (router.pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
}

export default MyComponent;
```