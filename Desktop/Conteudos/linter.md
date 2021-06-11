###Linter

-Linters are tools that you can use to help you debug your code.
They scan your scripts for common issues and errors, and give you back a report with line numbers that you can use to fix things.
In addition to actual bugs and errors, they also check for subjective, stylistic preferences as well. 

-The three most popular JS linters are:
1. 	JSLint. Highly opinionated and based on Douglas Crockford’s Javascript: The Good Parts, it does not allow for much configuration.
2. 	JSHint. Comes loaded with sensible defaults, but allows for a lot more configuration than JSLint.
3. 	ESLint. An extremely configurable linter that also supports JSX and can autoformat scripts to match your preferred code formatting style.
                
----

-All three provide an online GUI you can use.

-We will use the ESLint.

###Configuration Files 
-Use a JavaScript, JSON, or YAML file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of an .eslintrc.* file or an eslintConfig field in a package.json file, both of which ESLint will look for and read automatically, or you can specify a configuration file on the command line.
-Here are some of the options that you can configure in ESLint:
*Environments - which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.
*Globals - the additional global variables your script accesses during execution.
*Rules - which rules are enabled and at what error level.
*Plugins - which third-party plugins define additional rules, environments, configs, etc. for ESLint to use.

-All of these options give you fine-grained control over how ESLint treats your code.

-For more information, use the documentation page [link] (https://eslint.org/docs/user-guide/configuring#extending-configuration-files)


###Installation
`$ npm install eslint eslint-config-ibm --save-dev`

###Usage
-Add ibm to the extends section in your ESLint configuration file:
```
{
  'extends': 'ibm',
}
```
