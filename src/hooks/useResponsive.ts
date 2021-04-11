import { useMediaQuery } from 'react-responsive'

import { sizes } from '@Assets/styles/media'

function useResponsive() {
  const huge = useMediaQuery({ maxWidth: sizes.huge })
  const large = useMediaQuery({ maxWidth: sizes.large })
  const medium = useMediaQuery({ maxWidth: sizes.medium })
  const small = useMediaQuery({ maxWidth: sizes.small })

  return {
    huge,
    large,
    medium,
    small,
  }
}

export default useResponsive
