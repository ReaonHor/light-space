<template>
  <div class="timer">
    <!-- 表盘 -->
    <div class="clock-container">
      <!-- 指针 -->
      <div class="hand hours" ref="hours"></div>
      <div class="hand minutes" ref="minutes"></div>
      <div class="hand seconds" ref="seconds"></div>

      <!-- 圆心 -->
      <div class="point"></div>

      <!-- 8个刻度 -->
      <div class="marker">
        <span class="marker_1"></span>
        <span class="marker_2"></span>
        <span class="marker_3"></span>
        <span class="marker_4"></span>
        <span class="marker_5"></span>
        <span class="marker_6"></span>
        <span class="wu">{{wu=1?'下午':'上午'}}</span>
        <div class="mask"></div>
      </div>
    </div>
    <div class="weather">
      <div>
        <span class="adress">{{ weather.adress}}</span>
        <span class="temp">{{ weather.temp }}&#176;</span>
        <span>{{ weather.text }}</span>
        <span :class="`iconfont qi-${weather.icon}`"></span>
      </div>
      <div>
        <span class="msg">{{ weather.summary }}</span>
      </div>
    </div>
  </div>
  <div class="date">
    <span class="date1">{{moon}}月{{day}}号</span>
    <span class="date2">星期{{ week }}</span>
  </div>
</template>
<script>

import { getTime } from '@/util/getTime';
import { getWeather } from '@/util/getWeather'
export default {
  name: 'myTime',
  data () {
    return {
      wu: 1,
      moon: '',
      day: '',
      week: '',
      h: '',
      m: '',
      s: '',
      weather: {
        adress: '',
        temp: '',
        summary: '',
        text: '',
        icon: ''
      }
    }
  },
  created () {
    getTime().then(res => {
      this.wu = res.wu
      this.moon = res.mon
      this.week = res.week
      this.day = res.day
      let h = res.hours
      let m = res.minutes
      let s = res.seconds
      console.log(h)
      this.timer = setInterval(() => {
        s += 1
        let hDeg = (h % 12 + m / 60) * 30
        let mDeg = Math.floor((m + s / 60) * 6)
        let sDeg = s * 6
        this.$refs.hours.style.transform = 'rotate(' + hDeg + 'deg)'
        this.$refs.minutes.style.transform = 'rotate(' + mDeg + 'deg)'
        this.$refs.seconds.style.transform = 'rotate(' + sDeg + 'deg)'
      }, 1000)

    })
    getWeather().then(res => {
      this.weather = { ...res }
    })
  },
  beforeUnmount () {
    clearInterval(this.timer)
  }
}
</script>


<style lang="scss" scoped>
// 时钟的阴影设计
// inset .2rem .2rem .4rem var(--greyDark),inset -.2rem -.2rem .4rem var(--primary-dark-2)
$shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
  -0.2rem -0.2rem 0.5rem var(--white);
$inner-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
  -0.2rem -0.2rem 0.5rem var(--white);
$little-inner-shadow: inset 1px 1px 1px var(--greyLight-2),
  inset -1px -1px 1px var(--white);
.date {
  text-align: center;
  letter-spacing: 0.25rem;
  font-weight: 300;
  font-size: 1.7rem;
  color: #999;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  .date1 {
    margin-right: 2rem;
  }
}
.timer {
  position: relative;
  height: 25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .weather {
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 300;
    font-size: 1.5rem;
    color: #999;
    span {
      letter-spacing: 0.25rem;
      font-weight: 300;
      font-size: 1.3rem;
      color: #999;
      cursor: default;
    }
    .adress {
      font-size: 1rem;
    }
    .temp {
      font-weight: 400;
      color: var(--color1);
    }
    .msg {
      font-size: 1rem;
    }
  }
  .clock-container {
    margin-top: 5rem;
    width: 192px;
    height: 192px;
    border-radius: 50%;
    box-shadow: $shadow;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .hand {
      position: absolute;
      bottom: 96px;
      border-radius: 3.2px;
      transform-origin: bottom;
      z-index: 10;
    }
    .hours {
      width: 6.4px;
      height: 51.2px;
      background: var(--greyLight-3);
      transform: rotate(60deg);
    }
    .minutes {
      width: 6.4px;
      height: 73.6px;
      background: var(--greyDark);
      transform: rotate(0deg);
    }
    .seconds {
      width: 3.2px;
      height: 83.2px;
      background: var(--color1);
      transform: rotate(95deg);
      transition: all 0.3s ease-in-out;
    }
    .point {
      position: absolute;
      width: 12.8px;
      height: 12.8px;
      border-radius: 50%;
      background: var(--color1);
      z-index: 11;
    }
    //刻度
    .marker {
      width: 180.8px;
      height: 180.8px;
      box-shadow: $inner-shadow;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        width: 112px;
        height: 112px;
        box-shadow: $little-inner-shadow;
        background-color: var(--bgc1);
        z-index: 8;
      }
      .mask {
        position: absolute;
        height: 156.8px;
        width: 156.8px;
        border-radius: 50%;
        background-color: var(--bgc1);
        z-index: 3;
      }
      .wu {
        position: absolute;
        left: 90.4px;
        top: 112px;
        z-index: 9;
        box-shadow: none;
        color: #999;
        font-size: 13px;
        transform: translateX(-50%);
        letter-spacing: 3.2px;
      }
      span {
        position: absolute;
        box-shadow: $little-inner-shadow;
        z-index: 2;
      }

      &_1 {
        width: 3.2px;
        height: 177.6px;
        left: 90.4px;
      }
      &_2 {
        width: 3.2px;
        height: 177.6px;
        left: 90.4px;
        transform: rotate(30deg);
      }
      &_3 {
        width: 3.2px;
        height: 177.6px;
        left: 90.4px;
        transform: rotate(60deg);
      }
      &_4 {
        width: 3.2px;
        height: 177.6px;
        left: 90.4px;
        transform: rotate(90deg);
      }
      &_5 {
        width: 3.2px;
        height: 177.6px;
        left: 90.4px;
        transform: rotate(120deg);
      }
      &_6 {
        width: 3.2px;
        height: 177.6px;
        left: 90.4px;
        transform: rotate(150deg);
      }
    }
  }
}
</style>