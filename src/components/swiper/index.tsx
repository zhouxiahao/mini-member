import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { FC } from 'react'


export type SwiperItemProps = {
	title?: string
	bgUrl?: string
  itemClass?: string
}

export type SwiperProps = {
  list: SwiperItemProps[]
	containerClass?: string
}

export const SwiperContainer: FC<SwiperProps> = (props: SwiperProps) => {
  const { list, containerClass } = props
  
  return (
    <Swiper
      className={containerClass}
      indicatorColor='#999'
      indicatorActiveColor='#333'
      vertical={false}
      circular
      indicatorDots
      autoplay>
      {list.map((swiperItem) => {
        const { title, bgUrl, itemClass } = swiperItem
        return (
          <SwiperItem>
            <View className={itemClass}>
              <Image src={bgUrl as string} />
              <Text>{title}</Text>
            </View>
          </SwiperItem>
        )
      })}
      
    </Swiper>
  )
}

export default SwiperContainer