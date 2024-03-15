export type modes = Record<string, boolean | string>;

export const classNames = (cls: string, modes: modes, additional: string[]) => {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(modes)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
};

