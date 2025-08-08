// Mensaje de inicio en la consola
console.log('✔️\x20Iniciando...');

// Importación de módulos de Node.js
import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import _0x53532f from 'cfonts';
import { createInterface } from 'readline';
import _0x161907 from 'yargs';

// Obtención del directorio actual (__dirname) desde la URL del módulo
const __dirname = dirname(fileURLToPath(import.meta['url']));

// Creación de un require personalizado basado en __dirname
const require = createRequire(__dirname);

// Extracción de propiedades del archivo package.json
const { name, author } = require(join(__dirname, './package.json'));

// Configuración de la interfaz de línea de comandos readline
const rl = createInterface(process.stdin, process.stdout);

// Configuración y presentación de texto con cfonts
_0x53532f.say('HATSUNE-MIKU-ULTRA\x0aCREADOR\x20YOVANI\x0aBOT\x20CREADO\x20EN\x202020\x0aLA\x20MEJOR\x20CALIDAD\x20WHATSAPP', {
    'font': 'chrome',
    'align': 'center',
    'gradient': ['red', 'magenta']
});

_0x53532f.say('<|==================================================>\x0a[•]-SERVIDORM\x20=PRIVADO\x0a[•]-VERSIÓN\x20BOT\x20=20.49.12\x0a[•]-OWEN=OFC-YOVANI\x0a[•]-ESTADO=ACTIVO\x0a[•]-SUSCRÍBETE\x20AL\x20CANAL\x20DE\x20YOUTUBE\x0a[•]-GRACIAS\x20POR\x20TU\x20PREFERENCIA\x0a<|==================================================>', {
    'font': 'console',
    'align': 'center',
    'gradient': ['red', 'magenta']
});

// Variable para controlar si el proceso está corriendo
let isRunning = false;

// Función para iniciar el proceso
function start(_0x37aebf) {
    if (isRunning) return;
    isRunning = true;

    // Construcción de los argumentos para el proceso hijo
    const _0x3235e3 = [join(__dirname, _0x37aebf), ...process.argv.slice(0x2)];

    // Configuración del proceso maestro para ejecutar el proceso hijo
    setupMaster({ 'exec': _0x3235e3[0], 'args': _0x3235e3.slice(0x1) });

    // Creación del proceso hijo mediante fork
    const _0x539bf0 = fork();

    // Evento para manejar mensajes recibidos del proceso hijo
    _0x539bf0.on('message', _0x1a5872 => {
        console.log('[RECIBIDO]', _0x1a5872);
        switch (_0x1a5872) {
            case 'reset':
                _0x539bf0.process.kill();
                isRunning = false;
                start.apply(this, arguments);
                break;
            case 'uptime':
                _0x539bf0.send(process.uptime());
                break;
        }
    });

    // Evento cuando el proceso hijo sale
    _0x539bf0.on('exit', (_0x34d432, _0x1ce016) => {
        isRunning = false;
        console.error('❌\x20An\x20unexpected\x20error\x20occurred:', _0x1ce016);
        _0x539bf0.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        process.env.pm_id ? process.exit(0x1) : process.exit();
    });

    // Configuración de yargs para analizar los argumentos de la línea de comandos
    const _0x1fea04 = new Object(_0x161907(process.argv.slice(0x2))).exitProcess(false).parse();

    // Escucha de eventos en la interfaz readline para enviar mensajes al proceso hijo
    if (!_0x1fea04.test && (!rl.listenerCount() && rl.on('line', _0xaa6506 => {
        _0x539bf0.emit('message', _0xaa6506.trim());
    })));
}

// Inicia el proceso principal especificando el archivo principal 'main.js'
start('main.js');
