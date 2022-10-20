const program = require('commander');
const key = require('../commands/key')

program
    .command('set')
    .description('Set APi Key ')
    .action(key.set);

program
    .command('show')
    .description('Show APi Key ')
    .action(key.show);

program
    .command('remove')
    .description('Remove APi Key')
    .action(key.remove);

program.parse(process.argv);