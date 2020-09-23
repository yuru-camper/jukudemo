<template>
    <div class="result">
        <div class="with_search_bar">
            <div class="search_head">
                <div class="back"></div>
                <input type="text" class="input_search" placeholder="地名・塾名・志望校で検索">
                <div class="cancel">キャンセル</div>
            </div>
        </div>
        <div class="content" v-for="(juke, i) in jukes" :key="i">
            <AvatarImage :src="juke.img" class="--m" @click.native="to_juku_page(juke.id)" />
            <div class="text_info">
                <div class="to_juku_page" @click="to_juku_page(juke.id)">
                    <div class="juku_name">{{ juke.name }}</div>
                    <div class="address">{{juke.address }}</div>
                    <StarRating :rate="juke.rate" />
                </div>
                <div class="thumbs" @click="to_movie_page">
                    <img :src="thumb" alt="" class="thumb" v-for="(thumb, j) in juke.thumbs" :key="j">
                </div>
            </div>
            
        </div>
        
    </div>
</template>


<style lang="scss">
@media screen and (max-width: $max-width-sp) {
    .with_search_bar {
        padding-top: 25vw;
        .search_head {
            position: fixed;
            display: flex;
            top: 0;
            width: calc(100vw - 3vw * 2);
            justify-content: space-around;
            align-items: center;
            padding: 3vw;

            .back {
                width: 3vw;
                height: 3vw;
                border-top: solid 0.5vw $color-light;
                border-left: solid 0.5vw $color-light;
                transform: rotate(-45deg);
                margin-right: 2vw;
            }

            .input_search {
                font-size: 3.6vw;
                padding: 3vw;
                width: 64vw;
                border-radius: 2.5vw;
                border: none;
                background: #f0f0f0;

                &::placeholder {
                    font-size: 3.6vw;
                    color: $color-light;
                }
            }

            .cancel {
                font-size: 3.4vw;
                margin-left: 1vw;
            }
        }
    }
    .result {
        .content {
            display: flex;
            margin: 0 $margin-side-sp 5vw;

            .text_info {
                margin-left: 2vw;

                .juku_name {
                    font-size: $fos-2l-sp;
                    margin-bottom: 0.1vw;
                }

                .address {
                    font-size: $fos-m-sp;
                    color: $color-light;
                    margin-bottom: 0.5vw;
                }

                .thumbs {
                    display: flex;
                    margin-top: 2vw;

                    .thumb {
                        width: 15vw;
                        height: calc(15vw * 4 / 3);
                        object-fit: cover;
                        object-position: center;
                        margin-right: 0.5vw;
                    }
                }
            }
        }
    }
}
</style>


<script>
import AvatarImage from '../components/AvatarImage'
import StarRating from '../components/StarRating'

export default {
    layout: 'withSearchBar',
    components: {
        AvatarImage,
        StarRating
    },
    data() {
        return {
            jukes: [
                {
                    img: require('@/assets/img/herts.jpg'),
                    name: '洋光塾',
                    address: '秋田県秋田市手形学園町1-1',
                    rate: 4.7,
                    id: 'hiromitu',
                    thumbs:[
                        require('@/assets/img/3d.png'),
                        require('@/assets/img/biseki.png'),
                        require('@/assets/img/flow.png'),
                        require('@/assets/img/kondo.png'),
                        require('@/assets/img/napo.jpg'),
                    ]
                },
                {
                    img: require('@/assets/img/aiu.jpg'),
                    name: '村上塾',
                    address: '秋田県秋田市雄和椿川奥椿岱１９３−２',
                    rate: 4.1,
                    id: 'hiromitu',
                    thumbs:[
                        require('@/assets/img/neko.png'),
                        require('@/assets/img/saigo.jpg'),
                        require('@/assets/img/shizensu.png'),
                        require('@/assets/img/sonshi.jpg'),
                        require('@/assets/img/yousho.png'),
                    ]
                },
            ]
        }
    },
    methods: {
        to_juku_page(id) {
            this.$router.push({path: id})
        },
        to_movie_page() {
            this.$router.push('/hiromitu/shortMovie/sample')
        }
    }

}
</script>