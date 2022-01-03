import { useEffect, useState } from 'react';
import './pwaInstaller.css';
// import { LanContext } from '../../context/LanContext';
// import { NotifContext } from '../../context/NotifContext';

let deferredPrompt;

function PWAInstaller() {
    const [installable, setInstallable] = useState(false);
    //   const Lan = useContext(LanContext)
    //   const Notif = useContext(NotifContext)

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            setInstallable(true);
        });

        window.addEventListener('appinstalled', () => {
            // Log install to analytics
            // console.log('INSTALL: Success');
            alert.run({ type: "success", msg: "App Installed! 💻" })
        });
    }, []);

    const handleInstallClick = (e) => {
        // Hide the app provided install promotion
        setInstallable(false);
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    };

    return (
        <>
            {installable &&
                <div style={{ textAlign: 'center' }}>
                    <div
                        className="install-button"
                        onClick={handleInstallClick}
                    >
                        Instalar App
                    </div>
                </div>
            }
        </>
    );
}

export default PWAInstaller;