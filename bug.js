```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an infinite redirect loop if the pathname is already '/'
    router.push('/');
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
}

export default MyComponent;
```