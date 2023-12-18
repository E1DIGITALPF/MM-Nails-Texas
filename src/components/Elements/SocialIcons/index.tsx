import React, { CSSProperties } from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutubeSquare
} from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Button, Container } from './styles';

interface SocialIconsProps {
    instagramUrl?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    youtubeUrl?: string;
    iconsSize?: "tiny" | "small" | "medium" | "large";
    iconsStyle?: CSSProperties;
    iconsClassName?: string;
    containerStyle?: CSSProperties;
    containerClassName?: string;
}

export function SocialIcons({
    facebookUrl,
    twitterUrl,
    githubUrl,
    linkedinUrl,
    youtubeUrl,
    instagramUrl,
    iconsStyle,
    iconsSize,
    iconsClassName,
    containerStyle,
    containerClassName
}: SocialIconsProps) {

    const theme = useTheme()

    function openExternUrl(url: string) {
        window.open(url, '_blank')
    }


    return (
        <Container
            style={containerStyle}
            className={containerClassName}
        >
            {instagramUrl &&
                <Button
                    onClick={() => openExternUrl(instagramUrl)}
                >
                    <FaInstagramSquare
                        size={
                            iconsSize === 'large' ?
                                40 : iconsSize === 'tiny' ?
                                    16 : iconsSize === 'small' ?
                                        24 : 32
                        }
                        color={theme.colors.primary}
                        style={iconsStyle}
                        className={iconsClassName}
                    />
                </Button>
            }
            {twitterUrl &&
                <Button
                    onClick={() => openExternUrl(twitterUrl)}
                >
                    <FaTwitterSquare
                        size={
                            iconsSize === 'large' ?
                                40 : iconsSize === 'tiny' ?
                                    16 : iconsSize === 'small' ?
                                        24 : 32
                        } color={theme.colors.primary}
                        style={iconsStyle}
                        className={iconsClassName}
                    />
                </Button>
            }
            {facebookUrl &&
                <Button
                    onClick={() => openExternUrl(facebookUrl)}
                >
                    <FaFacebookSquare
                        size={
                            iconsSize === 'large' ?
                                40 : iconsSize === 'tiny' ?
                                    16 : iconsSize === 'small' ?
                                        24 : 32
                        } color={theme.colors.primary}
                        style={iconsStyle}
                        className={iconsClassName}
                    />
                </Button>
            }
            {githubUrl &&
                <Button
                    onClick={() => openExternUrl(githubUrl)}
                >
                    <FaGithubSquare
                        size={
                            iconsSize === 'large' ?
                                40 : iconsSize === 'tiny' ?
                                    16 : iconsSize === 'small' ?
                                        24 : 32
                        } color={theme.colors.primary}
                        style={iconsStyle}
                        className={iconsClassName}
                    />
                </Button>
            }
            {linkedinUrl &&
                <Button
                    onClick={() => openExternUrl(linkedinUrl)}
                >
                    <FaLinkedin
                        size={
                            iconsSize === 'large' ?
                                40 : iconsSize === 'tiny' ?
                                    16 : iconsSize === 'small' ?
                                        24 : 32
                        } color={theme.colors.primary}
                        style={iconsStyle}
                        className={iconsClassName}
                    />
                </Button>
            }
            {youtubeUrl &&
                <Button
                    onClick={() => openExternUrl(youtubeUrl)}
                >
                    <FaYoutubeSquare
                        size={
                            iconsSize === 'large' ?
                                40 : iconsSize === 'tiny' ?
                                    16 : iconsSize === 'small' ?
                                        24 : 32
                        } color={theme.colors.primary}
                        style={iconsStyle}
                        className={iconsClassName}
                    />
                </Button>
            }
        </Container>
    )
}