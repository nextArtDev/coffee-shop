# What we can do 

1. callbackUrl
2. DEFAULT_LOGIN_REDIRECT,

```typescript
//actions/auth/login.js

 await signIn('credentials', {
      phone,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    })
```