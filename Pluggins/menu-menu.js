// Importa el módulo node-fetch con un nombre de variable cifrado
import _0x128bd3 from 'node-fetch';

// Definición de la función handler como una función asíncrona que toma varios parámetros
let handler = async (_0x27a64a, { conn: _0x4e1b91, usedPrefix: _0x1340e0, usedPrefix: _0x5766fb, __dirname: _0x516b96, text: _0xc24a92, isPrems: _0x44c840 }) => {
    try {
        // Declaración de varias variables locales
        let _0x150082 = imagen5,
            _0x4da2a4 = './lib/img/Menu.jpg',
            _0x331151 = new Date(new Date() + 0x36ee80),
            _0x4bb6c4 = 'es',
            _0x31259e = _0x331151.toLocaleDateString(_0x4bb6c4, { 'weekday': 'long' }),
            _0x2751b9 = _0x331151.toLocaleDateString(_0x4bb6c4, { 'day': 'numeric', 'month': 'long', 'year': 'numeric' }),
            _0x129239 = process['uptime']() * 0x3e8,
            _0x236d98 = clockString(_0x129239),
            _0x32be3f = global['db']['data']['users'][_0x27a64a['sender']];

        // Obtención del número total de usuarios en la base de datos global
        const _0x3eba56 = Object.keys(global['db']['data']['users']).length;

        // Filtrado de usuarios registrados en la base de datos global
        let _0x573199 = Object.values(global['db']['data']['users']).filter(_0x1720f4 => _0x1720f4['registered'] == true).length,
            _0x4655fa = Object.entries(global['db']['data']['users']).length || '0',
            _0x5e8e52 = String.fromCharCode(0x200e),
            _0x24e380 = _0x5e8e52.repeat(0x352),
            _0x56585a = '@' + _0x27a64a['sender']['split']('@s.whatsapp.net')[0x0];

        // Definición de un array con tipos de archivos
        var _0x386a9b = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'],
            _0x16dbc4 = _0x386a9b[Math.floor(Math.random() * _0x386a9b.length)];

        // Construcción de la cadena de texto final
        let _0x1586b7 = (ig + '\x20' + _0x56585a + '\x0a' + ig2 + '\x20' + _0x236d98 + '\x0a' + ig3 + '\x20' + ((_0x4e1b91['user']['jid'] == global['conn']['user']['jid'] ? '' : 'Este\x20usuario\x20es\x20un\x20sub\x20bot.\x20https://wa.me/' + global['conn']['user']['jid']['split']`@`[0x0]) || 'Bot-principal') + '\x0a' + ig5 + '\x0a\x0a' + ig4)['trim']();

        // Verificación si el mensaje viene de un grupo
        if (_0x27a64a['isGroup']) {
            // Objeto que representa el mensaje a enviar si es grupo
            let _0x472b22 = {
                'key': {
                    'participants': '0@s.whatsapp.net',
                    'remoteJid': 'status@broadcast',
                    'fromMe': false,
                    'id': 'Halo'
                },
                'message': {
                    'contactMessage': {
                        'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=' + _0x27a64a['sender']['split']('@')[0x0] + ':' + _0x27a64a['sender']['split']('@')[0x0] + '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'
                    }
                },
                'participant': '0@s.whatsapp.net'
            };

            // Envío del mensaje con imagen y leyenda, mencionando usuarios
            _0x4e1b91['sendMessage'](_0x27a64a['chat'], { 'image': _0x150082, 'caption': _0x1586b7.trim(), 'mentions': [..._0x1586b7.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x57456b => _0x57456b[0x1] + '@s.whatsapp.net') }, { 'quoted': _0x472b22 });
        } else {
            // Objeto que representa el mensaje a enviar si es chat individual
            let _0x5049f7 = {
                'key': {
                    'participants': '0@s.whatsapp.net',
                    'remoteJid': 'status@broadcast',
                    'fromMe': false,
                    'id': 'Halo'
                },
                'message': {
                    'contactMessage': {
                        'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=' + _0x27a64a['sender']['split']('@')[0x0] + ':' + _0x27a64a['sender']['split']('@')[0x0] + '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'
                    }
                },
                'participant': '0@s.whatsapp.net'
            };

            // Envío del mensaje con imagen y leyenda, mencionando usuarios
            _0x4e1b91['sendMessage'](_0x27a64a['chat'], { 'image': _0x150082, 'caption': _0x1586b7.trim(), 'mentions': [..._0x1586b7.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2e7fd3 => _0x2e7fd3[0x1] + '@s.whatsapp.net') }, { 'quoted': _0x5049f7 });
        }
    } catch {
        // En caso de error, enviar un mensaje de error
        _0x4e1b91['reply'](_0x27a64a['chat'], '[❗] Se ha detectado un error. Por lo tanto, el menú no funcionará', _0x27a64a);
    }
};

// Expresión regular para activar el comando
handler['command'] = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;

// Experiencia asociada al comando (puede ser un contador o valor arbitrario)
handler['exp'] = 0x32;

// Manejo de fallos (no está definido en el código proporcionado)
handler['fail'] = null;

// Exportar la función handler como valor predeterminado del módulo
export default handler;

// Función que convierte un número de segundos en una cadena de horas:minutos:segundos
function clockString(_0x214c76) {
    let _0x396d6f = isNaN(_0x214c76) ? '--' : Math.floor(_0x214c76 / 0x36ee80),
        _0x3833b9 = isNaN(_0x214c76) ? '--' : Math.floor(_0x214c76 / 0xea60) % 0x3c,
        _0x13872f = isNaN(_0x214c76) ? '--' : Math.floor(_0x214c76 / 0x3e8) % 0x3c;
    return [_0x396d6f, _0x3833b9, _0x13872f].map(_0x500e4d => _0x500e4d.toString().padStart(0x2, 0x0)).join(':');
}
