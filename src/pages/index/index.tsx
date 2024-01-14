import { View, Text, Button, PageContainer } from '@tarojs/components'
import SwiperContainer, { type SwiperItemProps } from '@/components/swiper'
import { useLoad } from '@tarojs/taro'
import A from '@/assets/a.jpg'
import B from '@/assets/b.jpg'
import C from '@/assets/c.jpg'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const swiperList: SwiperItemProps[] = [
    {
      title: '洗车店1',
      bgUrl: A,
    },
    {
      title: '洗车店2',
      bgUrl: B,
    },{
      title: '洗车店3',
      bgUrl: C,
    }
  ]

  return (
    <View className='homePage'>
      <SwiperContainer list={swiperList}/>
      <View className='serviceArea'>
        <View className='s-a-child'>
          <Text>普通洗车</Text>
          <View>
            <Text>价格：25元</Text>
          </View>
          <Button className='btn-max-w' size='mini' plain type='primary'>支付</Button>
        </View>
        <View className='s-a-child'>
          <Text>打磨</Text>
          <View>
            <Text>价格：125元</Text>
          </View>
          <Button className='btn-max-w' size='mini' plain type='primary'>支付</Button>
        </View>
        <View className='s-a-child'>
          <Text>周边</Text>
          <View>
            <Text>价格：50元</Text>
          </View>
          <Button className='btn-max-w' size='mini' plain type='primary'>支付</Button>
        </View>
        <View className='s-a-child'>
          <Text>其他</Text>
          <View>
            <Text>价格：30元</Text>
          </View>
          <Button className='btn-max-w' size='mini' plain type='primary'>支付</Button>
        </View>
      </View>
      <PageContainer show={true} duration={3000} position='bottom' >
        <view>
          this is page-container
        </view>
      </PageContainer>
    </View>
  )
}
