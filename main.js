!(function(e) {
    function t(t) {
        for (var r, i, l = t[0], c = t[1], s = t[2], f = 0, p = []; f < l.length; f++)
            (i = l[f]), o[i] && p.push(o[i][0]), (o[i] = 0)
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r])
        for (u && u(t); p.length; ) p.shift()()
        return a.push.apply(a, s || []), n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, l = 1; l < n.length; l++) {
                var c = n[l]
                0 !== o[c] && (r = !1)
            }
            r && (a.splice(t--, 1), (e = i((i.s = n[0]))))
        }
        return e
    }
    var r = {},
        o = { 0: 0 },
        a = []
    function i(t) {
        if (r[t]) return r[t].exports
        var n = (r[t] = { i: t, l: !1, exports: {} })
        return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
    }
    ;(i.m = e),
        (i.c = r),
        (i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
        }),
        (i.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (i.t = function(e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var n = Object.create(null)
            if (
                (i.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    i.d(
                        n,
                        r,
                        function(t) {
                            return e[t]
                        }.bind(null, r)
                    )
            return n
        }),
        (i.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default
                      }
                    : function() {
                          return e
                      }
            return i.d(t, 'a', t), t
        }),
        (i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (i.p = '')
    var l = (window.webpackJsonp = window.webpackJsonp || []),
        c = l.push.bind(l)
    ;(l.push = t), (l = l.slice())
    for (var s = 0; s < l.length; s++) t(l[s])
    var u = c
    a.push([483, 1]), n()
})({
    1176: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Title = void 0)
        var r = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n]
                        ;(r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            })(),
            o = n(93),
            a = n(476)
        t.Title = (function(e) {
            function t() {
                return (
                    (function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function')
                    })(this, t),
                    (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            )
                        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            key: a.scenes.title
                        })
                    )
                )
            }
            return (
                (function(e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function, not ' + typeof t
                        )
                    ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                    })),
                        t &&
                            (Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, t)
                                : (e.__proto__ = t))
                })(t, o.Scene),
                r(t, [
                    {
                        key: 'create',
                        value: function() {
                            var e = this
                            this.input.keyboard.once('keydown', function(t) {
                                e.scene.start(a.scenes.level)
                            })
                            var t = this.cameras.main.width,
                                n = this.cameras.main.height
                            this.make
                                .text({
                                    x: t / 2,
                                    y: n / 2 - 50,
                                    text: 'Super BlackCat',
                                    style: { font: '20px monospace', fill: '#ffffff' }
                                })
                                .setOrigin(0.5, 0.5),
                                this.make
                                    .text({
                                        x: t / 2,
                                        y: n / 2,
                                        text: 'Press any key to play',
                                        style: { font: '20px monospace', fill: '#ffffff' }
                                    })
                                    .setOrigin(0.5, 0.5)
                        }
                    }
                ]),
                t
            )
        })()
    },
    1177: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Level = void 0)
        var r = n(93),
            o = n(476),
            a = n(1178),
            i = n(477)
        t.Level = (function(e) {
            function t() {
                !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                })(this, t)
                var e = (function(e, t) {
                    if (!e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        )
                    return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
                })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).call(this, { key: o.scenes.level })
                )
                return (
                    (e.score = 0),
                    (e.collectCollectible = function(t, n) {
                        if (
                            (n.disableBody(!0, !0),
                            (e.score += 10),
                            e.scoreText.setText('Score: ' + e.score),
                            0 === e.collectibles.countActive(!0))
                        ) {
                            e.collectibles.children.iterate(function(e) {
                                e.enableBody(!0, e.x, 0, !0, !0)
                            })
                            var r =
                                    t.x < 400
                                        ? Phaser.Math.Between(400, 800)
                                        : Phaser.Math.Between(0, 400),
                                o = e.hazards.create(r, 16, 'bomb')
                            o.setBounce(1),
                                o.setCollideWorldBounds(!0),
                                o.setVelocity(Phaser.Math.Between(-200, 200), 20)
                        }
                    }),
                    (e.gameOver = function() {
                        e.physics.pause(),
                            (e.score = 0),
                            e.player.kill(),
                            e.add.text(400, 300, 'Game Over', { fontSize: '64px', fill: '#000' }),
                            e.add.text(400, 356, 'Press Space to Restart', {
                                fontSize: '21px',
                                fill: '#000'
                            }),
                            e.input.keyboard.once('keyup_SPACE', function(t) {
                                e.scene.start(o.scenes.title)
                            })
                    }),
                    (e.create = function() {
                        e.add.image(400, 300, 'sky'),
                            (e.scoreText = e.add.text(16, 16, 'score: 0', {
                                fontSize: '32px',
                                fill: '#000'
                            })),
                            (e.player = new a.Player(e, 100, 450)),
                            e.initPlatforms(),
                            e.initCollectibles(),
                            e.initAnimations(),
                            e.initBombs(),
                            e.physics.add.collider(e.player, e.platforms),
                            e.physics.add.collider(e.collectibles, e.platforms),
                            e.physics.add.overlap(
                                e.player,
                                e.collectibles,
                                e.collectCollectible,
                                null,
                                e
                            )
                    }),
                    (e.preload = function() {
                        e.load.image('sky', 'assets/sky.png'),
                            e.load.image('ground', 'assets/platform.png'),
                            e.load.image('coffee', 'assets/coffee.png'),
                            e.load.image('bomb', 'assets/bomb.png'),
                            e.load.spritesheet('cat', 'assets/cat.png', {
                                frameWidth: 48,
                                frameHeight: 36,
                                spacing: 10
                            })
                    }),
                    (e.update = function() {
                        e.player.update()
                    }),
                    (e.initBombs = function() {
                        ;(e.hazards = e.physics.add.group()),
                            e.physics.add.collider(e.hazards, e.platforms),
                            e.physics.add.collider(e.player, e.hazards, e.gameOver, null, e)
                    }),
                    (e.initPlatforms = function() {
                        ;(e.platforms = e.physics.add.staticGroup()),
                            e.platforms
                                .create(400, 568, 'ground')
                                .setScale(2)
                                .refreshBody(),
                            e.platforms.create(600, 400, 'ground'),
                            e.platforms.create(50, 250, 'ground'),
                            e.platforms.create(750, 220, 'ground')
                    }),
                    (e.initAnimations = function() {
                        return Object.values(i.animations).forEach(function(t) {
                            return e.anims.create(t)
                        })
                    }),
                    (e.initCollectibles = function() {
                        ;(e.collectibles = e.physics.add.group({
                            key: 'coffee',
                            repeat: 11,
                            setXY: { x: 12, y: 0, stepX: 70 }
                        })),
                            e.collectibles.children.iterate(function(e) {
                                e.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
                            })
                    }),
                    e
                )
            }
            return (
                (function(e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function, not ' + typeof t
                        )
                    ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                    })),
                        t &&
                            (Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, t)
                                : (e.__proto__ = t))
                })(t, r.Scene),
                t
            )
        })()
    },
    1178: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Player = void 0)
        var r = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n]
                        ;(r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            })(),
            o = (function(e) {
                return e && e.__esModule ? e : { default: e }
            })(n(93)),
            a = n(477)
        t.Player = (function(e) {
            function t(e, n, r) {
                !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                })(this, t)
                var o = (function(e, t) {
                    if (!e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        )
                    return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, 'cat'))
                return (
                    (o.isDead = !1),
                    (o.speed = 240),
                    (o.jumpSpeed = 500),
                    o.setPosition(n, r),
                    (o.isDead = !1),
                    e.add.existing(o),
                    e.physics.add.existing(o),
                    o.setBounce(0.2),
                    o.setCollideWorldBounds(!0),
                    o.body.setGravityY(300),
                    (o.cursors = e.input.keyboard.createCursorKeys()),
                    o
                )
            }
            return (
                (function(e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function, not ' + typeof t
                        )
                    ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                    })),
                        t &&
                            (Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, t)
                                : (e.__proto__ = t))
                })(t, o.default.Physics.Arcade.Sprite),
                r(t, [
                    {
                        key: 'update',
                        value: function() {
                            this.isDead ||
                                (this.cursors.left.isDown
                                    ? (this.setVelocityX(-this.speed),
                                      this.body.touching.down &&
                                          this.anims.play(a.animations.cat_walk.key, !0),
                                      (this.flipX = !0))
                                    : this.cursors.right.isDown
                                        ? (this.setVelocityX(this.speed),
                                          this.body.touching.down &&
                                              this.anims.play(a.animations.cat_walk.key, !0),
                                          (this.flipX = !1))
                                        : (this.setVelocityX(0),
                                          this.body.touching.down &&
                                              this.anims.play(a.animations.cat_stand.key)),
                                this.cursors.up.isDown &&
                                    this.body.touching.down &&
                                    (this.setVelocityY(-this.jumpSpeed),
                                    this.anims.play(a.animations.cat_jump.key)))
                        }
                    },
                    {
                        key: 'kill',
                        value: function() {
                            ;(this.isDead = !0), this.anims.play(a.animations.cat_dead.key)
                        }
                    }
                ]),
                t
            )
        })()
    },
    1184: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.GlobalStyle = void 0)
        var r = (function(e, t) {
                return Object.freeze(
                    Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
                )
            })(
                [
                    '\n  * {\n        padding: 0;\n        margin: 0;\n    }\n        \n  body {\n    background-color: #F4F8FA;\n    \n    font-family: Arial,sans-serif;\n  }\n'
                ],
                [
                    '\n  * {\n        padding: 0;\n        margin: 0;\n    }\n        \n  body {\n    background-color: #F4F8FA;\n    \n    font-family: Arial,sans-serif;\n  }\n'
                ]
            ),
            o = n(478)
        t.GlobalStyle = (0, o.createGlobalStyle)(r)
    },
    476: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.scenes = { title: 'title', level: 'level' }
    },
    477: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.animations = {
            cat_stand: { key: 'cat_stand', frames: [{ key: 'cat', frame: 0 }], frameRate: 20 },
            cat_walk: {
                key: 'cat_walk',
                frames: [
                    { key: 'cat', frame: 1 },
                    { key: 'cat', frame: 2 },
                    { key: 'cat', frame: 3 },
                    { key: 'cat', frame: 4 }
                ],
                frameRate: 10,
                repeat: -1
            },
            cat_dead: { key: 'cat_dead', frames: [{ key: 'cat', frame: 5 }], frameRate: 20 },
            cat_jump: { key: 'cat_jump', frames: [{ key: 'cat', frame: 1 }], frameRate: 20 }
        }
    },
    483: function(e, t, n) {
        e.exports = n(484)
    },
    484: function(e, t, n) {
        'use strict'
        var r = d(
                [
                    '\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    margin: 0 auto;\n    max-width: 830px;\n    padding-bottom: 15px;\n\n    .text-align-center {\n        text-align: center;\n    }\n\n    hr {\n        margin: 15px 0;\n    }\n'
                ],
                [
                    '\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    margin: 0 auto;\n    max-width: 830px;\n    padding-bottom: 15px;\n\n    .text-align-center {\n        text-align: center;\n    }\n\n    hr {\n        margin: 15px 0;\n    }\n'
                ]
            ),
            o = d(
                [
                    '\n    margin-top: 15px;\n    padding: 15px;\n\n    border-radius: 5px;\n    border: 1px solid grey;\n    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);\n\n    background-color: white;\n'
                ],
                [
                    '\n    margin-top: 15px;\n    padding: 15px;\n\n    border-radius: 5px;\n    border: 1px solid grey;\n    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);\n\n    background-color: white;\n'
                ]
            ),
            a = d(
                [
                    '\n    position: relative;\n\n    .github-link {\n        position: absolute;\n        margin: auto;\n\n        top: 0;\n        bottom: 0;\n        right: 0;\n\n        a {\n            color: black;\n            font-size: 32px;\n\n            &:hover {\n                color: #505050;\n            }\n        }\n    }\n'
                ],
                [
                    '\n    position: relative;\n\n    .github-link {\n        position: absolute;\n        margin: auto;\n\n        top: 0;\n        bottom: 0;\n        right: 0;\n\n        a {\n            color: black;\n            font-size: 32px;\n\n            &:hover {\n                color: #505050;\n            }\n        }\n    }\n'
                ]
            ),
            i = p(n(7)),
            l = n(487),
            c = n(495),
            s = p(n(93)),
            u = p(n(478)),
            f = n(1184)
        function p(e) {
            return e && e.__esModule ? e : { default: e }
        }
        function d(e, t) {
            return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        }
        var y = u.default.div(r),
            h = u.default.div(o),
            b = u.default.div(a)
        ;(0, l.render)(
            i.default.createElement(function() {
                return i.default.createElement(
                    y,
                    null,
                    i.default.createElement(f.GlobalStyle, null),
                    i.default.createElement(
                        h,
                        null,
                        i.default.createElement(
                            b,
                            null,
                            i.default.createElement(
                                'h1',
                                { className: 'text-align-center' },
                                'Super BlackCat'
                            ),
                            i.default.createElement(
                                'p',
                                { className: 'text-align-center' },
                                'A Hackday Project made with',
                                ' ',
                                i.default.createElement(
                                    'a',
                                    { href: 'https://phaser.io/', target: '_blank' },
                                    'Phaser'
                                )
                            ),
                            i.default.createElement(
                                'div',
                                { className: 'github-link' },
                                i.default.createElement(
                                    'a',
                                    {
                                        href:
                                            'https://github.com/Datedsandwich/black-cat-platformer',
                                        target: '_blank'
                                    },
                                    i.default.createElement('i', { className: 'fab fa-github' })
                                )
                            )
                        ),
                        i.default.createElement('hr', null),
                        i.default.createElement('div', { id: 'game' })
                    )
                )
            }, null),
            document.getElementById('container')
        ),
            new s.default.Game(c.config)
    },
    495: function(e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.config = void 0)
        var r = (function(e) {
                return e && e.__esModule ? e : { default: e }
            })(n(93)),
            o = n(1176),
            a = n(1177)
        t.config = {
            type: r.default.AUTO,
            width: 800,
            height: 600,
            parent: 'game',
            physics: { default: 'arcade', arcade: { gravity: { y: 300 }, debug: !1 } },
            scene: [o.Title, a.Level]
        }
    }
})
//# sourceMappingURL=main.js.map
