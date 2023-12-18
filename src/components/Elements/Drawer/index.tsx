import { CSSProperties, ReactNode } from 'react';
import { MdClose } from 'react-icons/md';
import { useTheme } from 'styled-components';
import {
    CloseMenuButton,
    Container,
    MenuContainer
} from './styles';


interface DrawerProps {
    toggleDrawer: () => void
    direction?: 'top' | 'right' | 'left'
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    buttonStyle?: CSSProperties;
    buttonClassName?: string;
    menuStyle?: CSSProperties;
    menuClassName?: string;
}

export function Drawer({
    direction = 'top',
    toggleDrawer,
    children,
    style,
    buttonStyle,
}: DrawerProps) {

    const theme = useTheme()

    return (
        <Container
            direction={direction}
            role='menu'
        >
            <MenuContainer
                style={style}
            >
                <CloseMenuButton
                    style={buttonStyle}
                >
                    <MdClose
                        onClick={toggleDrawer}
                        size={32}
                        color={theme.colors.white100}
                        role='dialog'
                    />
                </CloseMenuButton>
                <>{children}</>
            </MenuContainer>
        </Container>
    )
}