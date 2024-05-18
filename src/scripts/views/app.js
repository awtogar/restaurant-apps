

import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import Routes from '../routes/routes';


class App {
    constructor() {
        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            navMenuId: 'nav-menu',
            linksMenuId: 'nav-links-menu'
        });

        this._renderPage(); // Memanggil fungsi renderPage saat aplikasi diinisialisasi
    }

    async _renderPage() {
        try {
            const url = UrlParser.parseActiveUrlWithCombiner();
            const page = Routes[url];

            const content = document.querySelector('#mainContent'); // Ganti dengan ID konten tempat halaman dirender
            content.innerHTML = await page.render(); // Render halaman
            await page.afterRender(); // Jalankan logika setelah rendering
        } catch (error) {
            console.error('Render error:', error.message);
        }
    }
}

export default App;



// FIXME: MASALAH KE-1 SAAT URL BEUBAH PAGE BLM TERBUKA OTOMATIS. JADI HARUS DI REFRESH MMANUAL AGAR HALAMAN MAU DILOAD
// FIXME: MASALAH KE-2 DETAIL BELUM MUNCUL SAAT SELESAI DI LOAD
// FIXME: MASALAH KE-3 APPSHELL BLM TAU KERENDER JUGA ATAU CUMAN DI SATU HALAMAN AJA
// FIXME: PENCAPAIAN-1 HALAMAN HOME BERHASIL DIRENDER MENGGUNAAKANN TEMPLATE DAN IITU WOW

