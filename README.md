A minimal demonstration of [karma-jspm](https://github.com/Workiva/karma-jspm/) issues

Verified as an issue with `node v4.1.1`. To replicate:

Manually apply the fix for [issue 16](https://github.com/Workiva/karma-jspm/issues/106)

then

	npm install
	npm run jspm:install
	npm run test

At time of writing you should see  404 error where it cannot find the simple test file. This file should absolutely be getting served however.git remote add origin git@github.com:togakangaroo/karma-jspm-tester.git

[This issue is reported in 107](https://github.com/Workiva/karma-jspm/issues/107)