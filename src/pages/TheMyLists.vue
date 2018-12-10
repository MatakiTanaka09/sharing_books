<template>
<div class="">
    <h1>今借りている本</h1>
    <p>中身がない場合：いま借りている本はないようです。</p>
    <div class="columns is-multiline is-centered booklists">
        <div class="card column is-narrow booklist is-3">
            <header class="card-header">
                <p class="card-header-title">
                    Component
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div class="card-content">
                <div class="content">
                    本の説明。本の説明。
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">返却する</a>
            </footer>
        </div>
        <div class="card column is-narrow booklist is-3">
            <header class="card-header">
                <p class="card-header-title">
                    Component
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div class="card-content">
                <div class="content">
                    本の説明。本の説明。
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">返却する</a>
            </footer>
        </div>
    </div>

    <h1>過去に借りた本</h1>
    <p>さあ、本を借りてみましょう！</p>
    <div class="columns is-multiline is-centered booklists">
        <div class="card column is-narrow booklist is-3">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">本タイトル</p>
                        <p class="subtitle is-6">著者</p>
                    </div>
                </div>
                <div class="content">
                    <p class="bookDesc">
                    本の説明。。本の説明。本の説明
                    </p>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-tag type="is-success" attached>Vuejs</b-tag>
                        </div>
                    </b-field>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag type="is-info">boorow</b-tag>
                            </b-taglist>
                        </div>
                    </b-field>
                </div>
            </div>
        </div>
        <div class="card column is-narrow booklist is-3">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">本タイトル</p>
                        <p class="subtitle is-6">著者</p>
                    </div>
                </div>
                <div class="content">
                    <p class="bookDesc">
                    本の説明。。本の説明。本の説明
                    </p>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-tag type="is-success" attached>Vuejs</b-tag>
                        </div>
                    </b-field>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag type="is-info">boorow</b-tag>
                            </b-taglist>
                        </div>
                    </b-field>
                </div>
            </div>
        </div>
        <div class="card column is-narrow booklist is-3">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">本タイトル</p>
                        <p class="subtitle is-6">著者</p>
                    </div>
                </div>
                <div class="content">
                    <p class="bookDesc">
                    本の説明。。本の説明。本の説明
                    </p>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-tag type="is-success" attached>Vuejs</b-tag>
                        </div>
                    </b-field>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag type="is-info">boorow</b-tag>
                            </b-taglist>
                        </div>
                    </b-field>
                </div>
            </div>
        </div>
        <div class="card column is-narrow booklist is-3">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">本タイトル</p>
                        <p class="subtitle is-6">著者</p>
                    </div>
                </div>
                <div class="content">
                    <p class="bookDesc">
                    本の説明。。本の説明。本の説明
                    </p>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-tag type="is-success" attached>Vuejs</b-tag>
                        </div>
                    </b-field>
                    <b-field grouped group-multiline>
                        <div class="control">
                            <b-taglist attached>
                                <b-tag type="is-info">boorow</b-tag>
                            </b-taglist>
                        </div>
                    </b-field>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>

</script>

<style scoped>
.booklists {
    margin: 16px 8px;
}
.booklist {
    max-height: 500px;
    margin: 8px 4px;
}
.bookDesc {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 10px;
}
</style>
