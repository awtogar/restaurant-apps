import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import
{
    createIcons,
    Menu,
    ArrowRight,
    Globe
} from 'lucide';

console.log('Hello Coders! :)');

createIcons({
    icons: {
        Menu,
        ArrowRight,
        Globe
    }
});