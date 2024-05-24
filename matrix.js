// JavaScript for the falling Matrix code effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*{@#$}:&%^/!ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍMЇЉЊЋЌЍЎЏБГДЖИЙЛПФЦЧШЩЪЫЭЮЯвджзийклмнптфцчшщъыьэюяѐёђѓєїљњћќѝўџѢѣѧѮѱѲѳҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҝҟҡҢңҤҥҩҪҫҬҭҰұҲҳҵҷҹҺҿӁӂӃӄӆӇӈӊӋӌӎӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӽӿԀԍԏԐԑԓԚԟԦԧϤϥϫϭｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝⲁⲂⲃⲄΓΔΘΛΞΠЀЁЂЃЄⲉⲊⲋⲌⲍⲏⲑⲓⲕⲗⲙⲛⲜⲝⲡⲧⲩⲫⲭⲯⳁⳈⳉⳋⳤ⳥⳦⳨⳩∀∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑∓ℇℏ℥Ⅎℷ⩫⨀⨅⨆⨉⨍⨎⨏⨐⨑⨒⨓⨔⨕⨖⨗⨘⨙⨚⨛⨜⨝⨿⩪';
const fontSize = 12;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
  // Use a broad font stack that includes monospace fonts likely to support a wide range of characters
    ctx.font = `${fontSize}px 'Courier New', 'Courier', 'Lucida Console', 'DejaVu Sans Mono', monospace`;


    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

// JavaScript for highlighting the current section in the navigation
const navbarLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
