# Next.js Infinite Redirect Loop Bug

This repository demonstrates a common, yet easily overlooked, bug in Next.js applications involving the `useRouter` hook.  Improper use of `router.push` can lead to an infinite redirect loop, causing the application to become unresponsive.

## The Bug
The bug is caused by attempting to redirect to the current route using `router.push`.  If the current pathname is already the target pathname of the `router.push` call, Next.js will trigger a redirect, which will repeatedly call the same `router.push` again, causing an infinite loop.  This is especially problematic in applications using client-side navigation.

## Solution
To avoid this, make sure to only push to a new route.  Check the current route before calling `router.push`, or use an alternative approach such as conditional rendering to only display navigation when necessary.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button.  If you are already on the home page, you will observe the infinite redirect loop.
