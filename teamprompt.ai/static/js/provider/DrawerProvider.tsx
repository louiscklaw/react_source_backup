import type { PropsWithChildren} from 'react';
import React, { createContext, useContext, useState } from 'react';

const emptyFunction = function () {
    return;
};

const DrawerContext = createContext<{ openDrawer: (modal: React.ReactNode) => void; closeDrawer: () => void }>({
    openDrawer: emptyFunction,
    closeDrawer: emptyFunction
});

const DrawerProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [drawer, setDrawer] = useState<React.ReactNode>(null);

    return (
        <DrawerContext.Provider value={{ openDrawer: setDrawer, closeDrawer: () => setDrawer(null) }}>
            {children}
            {drawer}
        </DrawerContext.Provider>
    );
};

export const useDrawerContext = () => useContext(DrawerContext);
export default DrawerProvider;
