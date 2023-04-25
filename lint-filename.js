const { exec } = require('child_process');
const path = require('path');

const isCamelCase = str => /^[a-z][a-zA-Z]*$/.test(str);
const isPascalCase = str => /^[A-Z][a-zA-Z]*$/.test(str);

exec('git diff --cached --name-only', (error, stdout) => {
	if (error) {
		console.error(`exec error: ${error}`);
		process.exit(1);
	}

	const files = stdout.split('\n');
	files.forEach(file => {
		if (file.startsWith('src/') && (file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.vue'))) {
			const filename = path.parse(file).name;
			if (!isCamelCase(filename) && !isPascalCase(filename)) {
				console.error(`Invalid file name: ${file}`);
				process.exit(1);
			}
		}
	});
});
