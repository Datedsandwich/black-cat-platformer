;(() => {
    'use strict'
    var e,
        t = {
            602: (e, t, r) => {
                var n = r(540),
                    o = r.n(n),
                    i = r(338),
                    a = r(440),
                    c = r.n(a),
                    u = 'title',
                    l = 'level'
                function s(e) {
                    return (
                        (s =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e
                                  }
                                : function (e) {
                                      return e &&
                                          'function' == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof e
                                  }),
                        s(e)
                    )
                }
                function f(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r]
                        ;(n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, p(n.key), n)
                    }
                }
                function p(e) {
                    var t = (function (e, t) {
                        if ('object' != s(e) || !e) return e
                        var r = e[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(e, t || 'default')
                            if ('object' != s(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == s(t) ? t : t + ''
                }
                function y(e, t, r) {
                    return (
                        (t = d(t)),
                        (function (e, t) {
                            if (t && ('object' == s(t) || 'function' == typeof t)) return t
                            if (void 0 !== t)
                                throw new TypeError(
                                    'Derived constructors may only return object or undefined'
                                )
                            return (function (e) {
                                if (void 0 === e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    )
                                return e
                            })(e)
                        })(e, b() ? Reflect.construct(t, r || [], d(e).constructor) : t.apply(e, r))
                    )
                }
                function b() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        )
                    } catch (e) {}
                    return (b = function () {
                        return !!e
                    })()
                }
                function d(e) {
                    return (
                        (d = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (e) {
                                  return e.__proto__ || Object.getPrototypeOf(e)
                              }),
                        d(e)
                    )
                }
                function m(e, t) {
                    return (
                        (m = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (e, t) {
                                  return (e.__proto__ = t), e
                              }),
                        m(e, t)
                    )
                }
                var h = (function (e) {
                        function t() {
                            return (
                                (function (e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError('Cannot call a class as a function')
                                })(this, t),
                                y(this, t, [{ key: u }])
                            )
                        }
                        return (
                            (function (e, t) {
                                if ('function' != typeof t && null !== t)
                                    throw new TypeError(
                                        'Super expression must either be null or a function'
                                    )
                                ;(e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, writable: !0, configurable: !0 }
                                })),
                                    Object.defineProperty(e, 'prototype', { writable: !1 }),
                                    t && m(e, t)
                            })(t, e),
                            (r = t),
                            (n = [
                                {
                                    key: 'create',
                                    value: function () {
                                        var e = this
                                        this.input.keyboard.once('keydown', function (t) {
                                            e.scene.start(l)
                                        })
                                        var t = this.cameras.main.width,
                                            r = this.cameras.main.height
                                        this.make
                                            .text({
                                                x: t / 2,
                                                y: r / 2 - 50,
                                                text: 'Super BlackCat',
                                                style: { font: '20px monospace', fill: '#ffffff' }
                                            })
                                            .setOrigin(0.5, 0.5),
                                            this.make
                                                .text({
                                                    x: t / 2,
                                                    y: r / 2,
                                                    text: 'Press any key to play',
                                                    style: {
                                                        font: '20px monospace',
                                                        fill: '#ffffff'
                                                    }
                                                })
                                                .setOrigin(0.5, 0.5)
                                    }
                                }
                            ]) && f(r.prototype, n),
                            o && f(r, o),
                            Object.defineProperty(r, 'prototype', { writable: !1 }),
                            r
                        )
                        var r, n, o
                    })(a.Scene),
                    v = {
                        cat_stand: {
                            key: 'cat_stand',
                            frames: [{ key: 'cat', frame: 0 }],
                            frameRate: 20
                        },
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
                        cat_dead: {
                            key: 'cat_dead',
                            frames: [{ key: 'cat', frame: 5 }],
                            frameRate: 20
                        },
                        cat_jump: {
                            key: 'cat_jump',
                            frames: [{ key: 'cat', frame: 1 }],
                            frameRate: 20
                        }
                    }
                function g(e) {
                    return (
                        (g =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e
                                  }
                                : function (e) {
                                      return e &&
                                          'function' == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof e
                                  }),
                        g(e)
                    )
                }
                function w(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r]
                        ;(n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, x(n.key), n)
                    }
                }
                function O(e, t, r) {
                    return (
                        (t = k(t)),
                        (function (e, t) {
                            if (t && ('object' == g(t) || 'function' == typeof t)) return t
                            if (void 0 !== t)
                                throw new TypeError(
                                    'Derived constructors may only return object or undefined'
                                )
                            return (function (e) {
                                if (void 0 === e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    )
                                return e
                            })(e)
                        })(e, j() ? Reflect.construct(t, r || [], k(e).constructor) : t.apply(e, r))
                    )
                }
                function j() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        )
                    } catch (e) {}
                    return (j = function () {
                        return !!e
                    })()
                }
                function k(e) {
                    return (
                        (k = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (e) {
                                  return e.__proto__ || Object.getPrototypeOf(e)
                              }),
                        k(e)
                    )
                }
                function P(e, t) {
                    return (
                        (P = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (e, t) {
                                  return (e.__proto__ = t), e
                              }),
                        P(e, t)
                    )
                }
                function S(e, t, r) {
                    return (
                        (t = x(t)) in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r),
                        e
                    )
                }
                function x(e) {
                    var t = (function (e, t) {
                        if ('object' != g(e) || !e) return e
                        var r = e[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(e, t || 'default')
                            if ('object' != g(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == g(t) ? t : t + ''
                }
                var _ = (function (e) {
                    function t(e, r, n) {
                        var o
                        return (
                            (function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function')
                            })(this, t),
                            S((o = O(this, t, [e, r, n, 'cat'])), 'cursors', void 0),
                            S(o, 'isDead', !1),
                            S(o, 'speed', 240),
                            S(o, 'jumpSpeed', 500),
                            o.setPosition(r, n),
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
                        (function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                )
                            ;(e.prototype = Object.create(t && t.prototype, {
                                constructor: { value: e, writable: !0, configurable: !0 }
                            })),
                                Object.defineProperty(e, 'prototype', { writable: !1 }),
                                t && P(e, t)
                        })(t, e),
                        (r = t),
                        (n = [
                            {
                                key: 'update',
                                value: function () {
                                    this.isDead ||
                                        (this.cursors.left.isDown
                                            ? (this.setVelocityX(-this.speed),
                                              this.body.touching.down &&
                                                  this.anims.play(v.cat_walk.key, !0),
                                              (this.flipX = !0))
                                            : this.cursors.right.isDown
                                              ? (this.setVelocityX(this.speed),
                                                this.body.touching.down &&
                                                    this.anims.play(v.cat_walk.key, !0),
                                                (this.flipX = !1))
                                              : (this.setVelocityX(0),
                                                this.body.touching.down &&
                                                    this.anims.play(v.cat_stand.key)),
                                        this.cursors.up.isDown &&
                                            this.body.touching.down &&
                                            (this.setVelocityY(-this.jumpSpeed),
                                            this.anims.play(v.cat_jump.key)))
                                }
                            },
                            {
                                key: 'kill',
                                value: function () {
                                    ;(this.isDead = !0), this.anims.play(v.cat_dead.key)
                                }
                            }
                        ]) && w(r.prototype, n),
                        o && w(r, o),
                        Object.defineProperty(r, 'prototype', { writable: !1 }),
                        r
                    )
                    var r, n, o
                })(c().Physics.Arcade.Sprite)
                function E(e) {
                    return (
                        (E =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e
                                  }
                                : function (e) {
                                      return e &&
                                          'function' == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof e
                                  }),
                        E(e)
                    )
                }
                function B(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r]
                        ;(n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, T(n.key), n)
                    }
                }
                function T(e) {
                    var t = (function (e, t) {
                        if ('object' != E(e) || !e) return e
                        var r = e[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(e, t || 'default')
                            if ('object' != E(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == E(t) ? t : t + ''
                }
                var R = (function () {
                    return (
                        (e = function e(t) {
                            var r,
                                n,
                                o,
                                i = this
                            !(function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function')
                            })(this, e),
                                (r = this),
                                (o = function (e, t) {
                                    t.disableBody(!0, !0),
                                        i.scene.updateScore(10),
                                        0 === i.group.countActive(!0) &&
                                            (i.reset(), i.scene.levelUp())
                                }),
                                (n = T((n = 'collect'))) in r
                                    ? Object.defineProperty(r, n, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (r[n] = o),
                                (this.scene = t),
                                (this.group = this.scene.physics.add.group({
                                    key: 'coffee',
                                    repeat: 11,
                                    setXY: { x: 20, y: 0, stepX: 69 }
                                })),
                                this.init()
                        }),
                        (t = [
                            {
                                key: 'init',
                                value: function () {
                                    this.group.children.iterate(function (e) {
                                        e.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
                                    })
                                }
                            },
                            {
                                key: 'reset',
                                value: function () {
                                    0 === this.group.countActive(!0) &&
                                        this.group.children.iterate(function (e) {
                                            e.enableBody(!0, e.x, 0, !0, !0)
                                        })
                                }
                            }
                        ]) && B(e.prototype, t),
                        r && B(e, r),
                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                        e
                    )
                    var e, t, r
                })()
                function z(e) {
                    return (
                        (z =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e
                                  }
                                : function (e) {
                                      return e &&
                                          'function' == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof e
                                  }),
                        z(e)
                    )
                }
                function A(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r]
                        ;(n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, C(n.key), n)
                    }
                }
                function C(e) {
                    var t = (function (e, t) {
                        if ('object' != z(e) || !e) return e
                        var r = e[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(e, t || 'default')
                            if ('object' != z(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == z(t) ? t : t + ''
                }
                var D = (function () {
                    return (
                        (e = function e(t) {
                            !(function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function')
                            })(this, e),
                                (this.scene = t),
                                (this.group = this.scene.physics.add.staticGroup()),
                                this.init()
                        }),
                        (t = [
                            {
                                key: 'init',
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 1
                                    this.clearPlatforms(),
                                        1 === e &&
                                            (this.group
                                                .create(400, 568, 'ground')
                                                .setScale(2)
                                                .refreshBody(),
                                            this.group.create(612, 400, 'ground'),
                                            this.group.create(50, 250, 'ground'),
                                            this.group.create(750, 220, 'ground'))
                                }
                            },
                            {
                                key: 'clearPlatforms',
                                value: function () {
                                    this.group.clear(!0, !0)
                                }
                            }
                        ]),
                        t && A(e.prototype, t),
                        r && A(e, r),
                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                        e
                    )
                    var e, t, r
                })()
                function N(e) {
                    return (
                        (N =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e
                                  }
                                : function (e) {
                                      return e &&
                                          'function' == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof e
                                  }),
                        N(e)
                    )
                }
                function X(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r]
                        ;(n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, Y(n.key), n)
                    }
                }
                function M(e, t, r) {
                    return (
                        (t = F(t)),
                        (function (e, t) {
                            if (t && ('object' == N(t) || 'function' == typeof t)) return t
                            if (void 0 !== t)
                                throw new TypeError(
                                    'Derived constructors may only return object or undefined'
                                )
                            return (function (e) {
                                if (void 0 === e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    )
                                return e
                            })(e)
                        })(e, V() ? Reflect.construct(t, r || [], F(e).constructor) : t.apply(e, r))
                    )
                }
                function V() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        )
                    } catch (e) {}
                    return (V = function () {
                        return !!e
                    })()
                }
                function F(e) {
                    return (
                        (F = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (e) {
                                  return e.__proto__ || Object.getPrototypeOf(e)
                              }),
                        F(e)
                    )
                }
                function G(e, t) {
                    return (
                        (G = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (e, t) {
                                  return (e.__proto__ = t), e
                              }),
                        G(e, t)
                    )
                }
                function U(e, t, r) {
                    return (
                        (t = Y(t)) in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r),
                        e
                    )
                }
                function Y(e) {
                    var t = (function (e, t) {
                        if ('object' != N(e) || !e) return e
                        var r = e[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(e, t || 'default')
                            if ('object' != N(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == N(t) ? t : t + ''
                }
                var H,
                    W = (function (e) {
                        function t() {
                            var e
                            return (
                                (function (e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError('Cannot call a class as a function')
                                })(this, t),
                                U((e = M(this, t, [{ key: l }])), 'hazards', void 0),
                                U(e, 'platforms', void 0),
                                U(e, 'player', void 0),
                                U(e, 'collectibles', void 0),
                                U(e, 'score', 0),
                                U(e, 'scoreText', void 0),
                                U(e, 'gameOver', function () {
                                    e.physics.pause(),
                                        e.player.kill(),
                                        e.add.text(400, 300, 'Game Over', {
                                            fontSize: '64px',
                                            fill: '#000'
                                        }),
                                        e.add.text(400, 356, 'Press Space to Restart', {
                                            fontSize: '21px',
                                            fill: '#000'
                                        }),
                                        e.input.keyboard.once('keyup-SPACE', function (t) {
                                            e.scene.restart(u)
                                        })
                                }),
                                U(e, 'create', function () {
                                    e.add.image(400, 300, 'sky'),
                                        (e.score = 0),
                                        (e.scoreText = e.add.text(16, 16, 'Score: 0', {
                                            fontSize: '32px',
                                            fill: '#000'
                                        })),
                                        (e.player = new _(e, 100, 450)),
                                        e.initAnimations(),
                                        (e.collectibles = new R(e)),
                                        (e.platforms = new D(e)),
                                        e.initBombs(),
                                        e.physics.add.collider(e.player, e.platforms.group),
                                        e.physics.add.collider(
                                            e.collectibles.group,
                                            e.platforms.group
                                        ),
                                        e.physics.add.overlap(
                                            e.player,
                                            e.collectibles.group,
                                            e.collectibles.collect,
                                            null,
                                            e
                                        )
                                }),
                                U(e, 'preload', function () {
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
                                U(e, 'update', function () {
                                    e.player.update()
                                }),
                                U(e, 'initBombs', function () {
                                    ;(e.hazards = e.physics.add.group()),
                                        e.physics.add.collider(e.hazards, e.platforms.group),
                                        e.physics.add.collider(
                                            e.player,
                                            e.hazards,
                                            e.gameOver,
                                            null,
                                            e
                                        )
                                }),
                                U(e, 'initAnimations', function () {
                                    Object.values(v).forEach(function (t) {
                                        e.anims.exists(t.key) || e.anims.create(t)
                                    })
                                }),
                                U(e, 'updateScore', function (t) {
                                    ;(e.score += t), e.scoreText.setText('Score: ' + e.score)
                                }),
                                U(e, 'levelUp', function () {
                                    var t =
                                            e.player.x < 400
                                                ? Phaser.Math.Between(400, 800)
                                                : Phaser.Math.Between(0, 400),
                                        r = e.hazards.create(t, 16, 'bomb')
                                    r.setBounce(1),
                                        r.setCollideWorldBounds(!0),
                                        r.setVelocity(Phaser.Math.Between(-200, 200), 20)
                                }),
                                e
                            )
                        }
                        return (
                            (function (e, t) {
                                if ('function' != typeof t && null !== t)
                                    throw new TypeError(
                                        'Super expression must either be null or a function'
                                    )
                                ;(e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, writable: !0, configurable: !0 }
                                })),
                                    Object.defineProperty(e, 'prototype', { writable: !1 }),
                                    t && G(e, t)
                            })(t, e),
                            (r = t),
                            n && X(r.prototype, n),
                            o && X(r, o),
                            Object.defineProperty(r, 'prototype', { writable: !1 }),
                            r
                        )
                        var r, n, o
                    })(a.Scene),
                    I = {
                        type: c().AUTO,
                        width: 800,
                        height: 600,
                        parent: 'game',
                        physics: { default: 'arcade', arcade: { gravity: { y: 300 }, debug: !1 } },
                        scene: [h, W]
                    },
                    K = r(42)
                var q,
                    J,
                    L,
                    Q,
                    Z,
                    $ = (0, K.DU)(
                        H ||
                            ((q = [
                                '\n  * {\n        padding: 0;\n        margin: 0;\n    }\n        \n  body {\n    background-color: #F4F8FA;\n    \n    font-family: Arial,sans-serif;\n  }\n'
                            ]),
                            J || (J = q.slice(0)),
                            (H = Object.freeze(
                                Object.defineProperties(q, { raw: { value: Object.freeze(J) } })
                            )))
                    )
                function ee(e, t) {
                    return (
                        t || (t = e.slice(0)),
                        Object.freeze(
                            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
                        )
                    )
                }
                var te = K.Ay.div(
                        L ||
                            (L = ee([
                                '\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    margin: 0 auto;\n    max-width: 830px;\n    padding-bottom: 15px;\n\n    .text-align-center {\n        text-align: center;\n    }\n\n    hr {\n        margin: 15px 0;\n    }\n'
                            ]))
                    ),
                    re = K.Ay.div(
                        Q ||
                            (Q = ee([
                                '\n    margin-top: 15px;\n    padding: 15px;\n\n    border-radius: 5px;\n    border: 1px solid grey;\n    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);\n\n    background-color: white;\n'
                            ]))
                    ),
                    ne = K.Ay.div(
                        Z ||
                            (Z = ee([
                                '\n    position: relative;\n\n    .github-link {\n        position: absolute;\n        margin: auto;\n\n        top: 0;\n        bottom: 0;\n        right: 0;\n\n        a {\n            color: black;\n            font-size: 32px;\n\n            &:hover {\n                color: #505050;\n            }\n        }\n    }\n'
                            ]))
                    ),
                    oe = function () {
                        return o().createElement(
                            te,
                            null,
                            o().createElement($, null),
                            o().createElement(
                                re,
                                null,
                                o().createElement(
                                    ne,
                                    null,
                                    o().createElement(
                                        'h1',
                                        { className: 'text-align-center' },
                                        'Super BlackCat'
                                    ),
                                    o().createElement(
                                        'p',
                                        { className: 'text-align-center' },
                                        'A Hackday Project made with',
                                        ' ',
                                        o().createElement(
                                            'a',
                                            { href: 'https://phaser.io/', target: '_blank' },
                                            'Phaser'
                                        )
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: 'github-link' },
                                        o().createElement(
                                            'a',
                                            {
                                                href: 'https://github.com/Datedsandwich/black-cat-platformer',
                                                target: '_blank'
                                            },
                                            o().createElement('i', { className: 'fab fa-github' })
                                        )
                                    )
                                ),
                                o().createElement('hr', null),
                                o().createElement('div', { id: 'game' })
                            )
                        )
                    },
                    ie = document.getElementById('container')
                ;(0, i.H)(ie).render(o().createElement(oe, null)),
                    setTimeout(function () {
                        new (c().Game)(I)
                    }, 100)
            }
        },
        r = {}
    function n(e) {
        var o = r[e]
        if (void 0 !== o) return o.exports
        var i = (r[e] = { id: e, loaded: !1, exports: {} })
        return t[e].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports
    }
    ;(n.m = t),
        (e = []),
        (n.O = (t, r, o, i) => {
            if (!r) {
                var a = 1 / 0
                for (s = 0; s < e.length; s++) {
                    for (var [r, o, i] = e[s], c = !0, u = 0; u < r.length; u++)
                        (!1 & i || a >= i) && Object.keys(n.O).every((e) => n.O[e](r[u]))
                            ? r.splice(u--, 1)
                            : ((c = !1), i < a && (a = i))
                    if (c) {
                        e.splice(s--, 1)
                        var l = o()
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            i = i || 0
            for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1]
            e[s] = [r, o, i]
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e
            return n.d(t, { a: t }), t
        }),
        (n.d = (e, t) => {
            for (var r in t)
                n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
        (() => {
            var e = { 792: 0 }
            n.O.j = (t) => 0 === e[t]
            var t = (t, r) => {
                    var o,
                        i,
                        [a, c, u] = r,
                        l = 0
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in c) n.o(c, o) && (n.m[o] = c[o])
                        if (u) var s = u(n)
                    }
                    for (t && t(r); l < a.length; l++)
                        (i = a[l]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0)
                    return n.O(s)
                },
                r = (self.webpackChunksuper_blackcat = self.webpackChunksuper_blackcat || [])
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
        })(),
        (n.nc = void 0)
    var o = n.O(void 0, [134], () => n(602))
    o = n.O(o)
})()
//# sourceMappingURL=main.7e5b96ae21d3e9ad141b.js.map
