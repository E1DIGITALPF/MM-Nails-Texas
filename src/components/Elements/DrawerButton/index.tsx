import { CSSProperties } from 'react';
import { MdMenu } from 'react-icons/md';
import { Container } from './styles';

interface DrawerButtonProps {
    toggleDrawer: () => void;
    containerStyle?: CSSProperties;
    containerClassName?: string;
    iconStyle?: CSSProperties;
    iconClassName?: string;
}

export function DrawerButton({
    toggleDrawer,
    containerStyle,
    containerClassName,
    iconStyle,
    iconClassName
}: DrawerButtonProps) {

    return (
        <Container
            style={containerStyle}
            className={containerClassName}
        >
            <MdMenu
                onClick={toggleDrawer}
                size={32}
                style={iconStyle}
                className={iconClassName}
                data-testid='DrawerButton-id'
                color='#fff'
            />
        </Container>
    )
}