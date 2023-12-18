import NextProgress from 'next-progress'
import { useTheme } from 'styled-components'

interface NextProgressProps{
    color: string
}

export  function NextProgressComponent({color} : NextProgressProps){


    return(
        <NextProgress
            options={{
                showSpinner: false
            }}
            color={color}
            height={4}
        />
    )
}
