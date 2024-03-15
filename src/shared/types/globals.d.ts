declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.scss' {
	const styles: { [key: string]: string };
	export default styles;
}

