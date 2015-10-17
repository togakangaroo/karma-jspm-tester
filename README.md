A minimal demonstration of [karma-jspm](https://github.com/Workiva/karma-jspm/) issues

Verified as an issue with `node v4.1.1`. To replicate:

	npm install
	npm run jspm:install
	npm run test

At time of writing you should see  404 error where it cannot find the simple test file. This file should absolutely be getting served however.