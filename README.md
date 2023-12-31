<h1>useBackgroundTimer</h1>
<p>A custom React Native Hook that calculates the time an app spends in the inactive or background state. Ideal for handling operations when the app's state changes.</p>
<h2>Table of Contents</h2>
<ul>
<li><a href="#intro" target="_new">Intro</a></li>
<li><a href="#motivation" target="_new">Motivation</a></li>
<li><a href="#installation" target="_new">Installation</a></li>
<li><a href="#usage" target="_new">Usage</a></li>
<li><a href="#api" target="_new">API</a></li>
<li><a href="#example" target="_new">Example</a></li>
</ul>

## Intro

<p>The <code><strong>useBackgroundTimer</strong></code> is a custom React Native Hook that calculates the time spent by the app in the inactive or background state. This hook is very useful when you want to perform certain operations when the app goes to the background or becomes active again.</p>

## Motivation

<p>In the process of developing a mobile application, I found the need for a functionality that resets the app if it's inactive for 30 minutes. Upon researching, I found that the existing npm packages that provide similar functionality weren't maintained to my satisfaction. To address this gap and aid the community, I developed this hook. I hope it proves to be valuable to you.</p>

## Installation

<p>This hook relies on <code><strong>react</strong></code>, <code><strong>react-native</strong></code>, and <code><strong>@react-native-async-storage/async-storage</strong></code>. Make sure these dependencies are installed in your project.</p>

```bash
npm install @react-native-async-storage/async-storage
```

or

```bash
yarn add @react-native-async-storage/async-storage
```

then

```bash
npm install rn-use-background-timer
```

or

```bash
yarn add rn-use-background-timer
```

## Usage

<p>First, import the <code<strong>>useBackgroundTimer</strong></code> hook in your component file.</p>
<code><strong>import { useBackgroundTimer } from "rn-use-background-timer";</strong></code>

<p>Then call useBackgroundTimer hook inside a functional component with or without the optional parameters.</p>

```jsx
const App = () => {
  const { duration } = useBackgroundTimer();
  // or
  const { duration } = useBackgroundTimer({
    keepPreviousTime: true,
    onError: (error) => console.error(error),
    onBackground: () => console.log("App went to background"),
    onActive: () => console.log("App is now active"),
  });

  return (
    <View>
      <Text>App has been in background for {duration} seconds</Text>
    </View>
  );
};
```

## API

<p>The <code><strong>useBackgroundTimer</strong></code> hook accepts an optional object as argument with the following properties:</p>
<ul>
    <li><code><strong>keepPreviousTime: boolean</strong></code>: Whether or not to keep the duration from the previous inactive or background state. Defaults to <code>false</code>.</li>
    <li><code><strong>onError: (error: Error) =&gt; void</strong></code>: Function to execute when there is an error. Defaults to <code>console.error</code>.</li>
    <li><code><strong>onBackground: () =&gt; void</strong></code>: Function to execute when app goes to the background state.</li>
    <li><code><strong>onActive: () =&gt; void</strong></code>: Function to execute when app becomes active.</li>
</ul>
<p>This hook returns an object with the following property:</p>
<ul>
    <li><code><strong>duration: number</strong></code>: Time in seconds that the app spent in the inactive or background state.</li>
</ul>
