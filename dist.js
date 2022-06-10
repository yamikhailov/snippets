(() => {
    "use strict";
    const e = {
            Devs: ["DamienVesper", "ITSDABOMB", "Jeffry", "devclied"],
            Admins: ["DamienVesper", "ITSDABOMB", "Jeffry", "devclied", "Fiftyyyyy", "Kek", "TheChoco", "Sjmun", "Tommy_Finle", "xTangox"],
            Mods: ["Speedy_Sloth", "Sky920", "Ironguardian", "DarkAlph", "Lightness", "Marin™"],
            Helpers: [],
            Designers: ["Duckioboi"],
            url: "https://krew.io",
            worldsize: 2500,
            palmTree: ["Jamaica"],
            christmasTree: [],
            snowman: [],
            setProperties: {
                inVision: !1
            },
            Labels: {
                redrawInterval: 250,
                fontFamily: "Arial, Helvetica, sans-serif",
                distanceMultiplier: {
                    0: 40,
                    1: 160,
                    5: 300
                },
                boats: {
                    useMethod: "inRange"
                }
            }
        },
        t = {
            0: {
                id: 0,
                name: "Wood Plank",
                hp: 50,
                turnspeed: 1.2,
                price: 500,
                maxKrewCapacity: 1,
                cargoSize: 200,
                baseheight: 1.4,
                width: 4,
                depth: 5.5,
                arcFront: 0,
                arcBack: 0,
                inertia: .1,
                radius: 5,
                speed: 6.8,
                labelHeight: 10,
                regeneration: 1,
                body: "raft",
                sail: "raft",
                mast: "raft",
                scale: [1.2, 1, 1.5],
                offset: [0, -1, 0],
                rotation: [0, 0, 0]
            },
            1: {
                id: 1,
                image: '<img src="/assets/img/ships/raft.png" style="height: 30px">',
                name: "Raft 1",
                hp: 100,
                turnspeed: 1.2,
                price: 500,
                maxKrewCapacity: 1,
                cargoSize: 250,
                baseheight: 1.4,
                width: 4,
                depth: 5.5,
                arcFront: 0,
                arcBack: 0,
                inertia: .1,
                radius: 5,
                speed: 6.5,
                labelHeight: 10,
                regeneration: 1,
                body: "raft",
                sail: "raft",
                mast: "raft",
                scale: [1.7, 1.7, 1.7],
                offset: [0, -1, 0],
                rotation: [0, 0, 0]
            },
            2: {
                id: 2,
                image: '<img src="/assets/img/ships/raft.png" style="height: 35px">',
                name: "Raft 2",
                hp: 150,
                turnspeed: 1,
                price: 1300,
                maxKrewCapacity: 2,
                cargoSize: 300,
                baseheight: 1.4,
                width: 4.5,
                depth: 6,
                arcFront: .3,
                arcBack: 0,
                inertia: .1,
                radius: 5,
                speed: 6.2,
                labelHeight: 10,
                regeneration: 1,
                body: "raft",
                sail: "raft",
                mast: "raft",
                scale: [1.7, 1.7, 1.7],
                offset: [0, -1, 0],
                rotation: [0, 0, 0]
            },
            3: {
                id: 3,
                image: '<img src="/assets/img/ships/raft.png" style="height: 40px">',
                name: "Raft 3",
                hp: 200,
                turnspeed: .9,
                price: 2400,
                maxKrewCapacity: 3,
                cargoSize: 400,
                baseheight: 1.4,
                width: 5,
                depth: 6.5,
                arcFront: .3,
                arcBack: 0,
                inertia: .1,
                radius: 5,
                speed: 5.9,
                labelHeight: 10,
                regeneration: 1,
                body: "raft",
                sail: "raft",
                mast: "raft",
                scale: [1.7, 1.7, 1.7],
                offset: [0, -1, 0],
                rotation: [0, 0, 0]
            },
            4: {
                id: 4,
                image: '<img src="/assets/img/ships/boat.png" style="height: 30px">',
                name: "Boat 1",
                hp: 450,
                turnspeed: .7,
                price: 6900,
                maxKrewCapacity: 5,
                cargoSize: 500,
                baseheight: 3,
                width: 5.7,
                depth: 13.4,
                arcFront: .21,
                arcBack: .02,
                inertia: .5,
                radius: 10,
                speed: 6,
                labelHeight: 17,
                regeneration: 1,
                body: "boat",
                sail: "boat",
                mast: "boat",
                scale: [.06, .06, .06],
                offset: [0, 7.2, -2.5],
                rotation: [0, Math.PI / 2, 0]
            },
            5: {
                id: 5,
                image: '<img src="/assets/img/ships/boat.png" style="height: 35px">',
                name: "Boat 2",
                hp: 600,
                turnspeed: .7,
                price: 11e3,
                maxKrewCapacity: 6,
                cargoSize: 600,
                baseheight: 3,
                width: 6.9,
                depth: 20,
                arcFront: .21,
                arcBack: .02,
                inertia: .5,
                radius: 10,
                speed: 6.1,
                labelHeight: 22,
                regeneration: 1,
                body: "boat",
                sail: "boat",
                mast: "boat",
                scale: [.08, .08, .08],
                offset: [0, 10.5, -4.2],
                rotation: [0, Math.PI / 2, 0]
            },
            6: {
                id: 6,
                image: '<img src="/assets/img/ships/boat.png" style="height: 40px">',
                name: "Boat 3",
                hp: 750,
                turnspeed: .7,
                price: 16e3,
                maxKrewCapacity: 7,
                cargoSize: 700,
                baseheight: 3,
                width: 8.7,
                depth: 25,
                arcFront: .18,
                arcBack: .03,
                inertia: .5,
                radius: 10,
                speed: 6.2,
                labelHeight: 29.7,
                regeneration: 1,
                body: "boat",
                sail: "boat",
                mast: "boat",
                scale: [.1, .1, .1],
                offset: [0, 14, -4.2],
                rotation: [0, Math.PI / 2, 0]
            },
            7: {
                id: 7,
                image: '<img src="/assets/img/ships/trader.png" style="height: 30px">',
                name: "Trader 1",
                hp: 600,
                turnspeed: .5,
                price: 4350,
                maxKrewCapacity: 4,
                cargoSize: 4e3,
                baseheight: 3,
                width: 7,
                depth: 13.4,
                arcFront: .05,
                arcBack: 0,
                inertia: .5,
                radius: 10,
                speed: 5.1,
                labelHeight: 16,
                regeneration: 1,
                body: "trader",
                sail: "trader",
                mast: "trader",
                scale: [1.5, 1.5, 1.5],
                offset: [0, -3.5, 0],
                rotation: [0, 0, 0]
            },
            8: {
                id: 8,
                image: '<img src="/assets/img/ships/trader.png" style="height: 35px">',
                name: "Trader 2",
                hp: 800,
                turnspeed: .5,
                price: 18e3,
                maxKrewCapacity: 6,
                cargoSize: 6e3,
                baseheight: 3,
                width: 7.3,
                depth: 15,
                arcFront: .05,
                arcBack: 0,
                inertia: .5,
                radius: 10,
                speed: 5,
                labelHeight: 18,
                regeneration: 1,
                body: "trader",
                sail: "trader",
                mast: "trader",
                scale: [1.7, 1.7, 1.7],
                offset: [0, -3.5, 0],
                rotation: [0, 0, 0]
            },
            9: {
                id: 9,
                image: '<img src="/assets/img/ships/trader.png" style="height: 40px">',
                name: "Trader 3",
                hp: 1e3,
                turnspeed: .5,
                price: 45e3,
                maxKrewCapacity: 6,
                cargoSize: 8e3,
                baseheight: 3,
                width: 8.8,
                depth: 17.8,
                arcFront: .05,
                arcBack: 0,
                inertia: .5,
                radius: 10,
                speed: 4.9,
                labelHeight: 21,
                regeneration: 1,
                body: "trader",
                sail: "trader",
                mast: "trader",
                scale: [1.9, 1.9, 1.9],
                offset: [0, -3.5, 0],
                rotation: [0, 0, 0],
                availableAt: ["Jamaica"]
            },
            10: {
                id: 10,
                image: '<img src="/assets/img/ships/destroyer.png" style="height: 35px">',
                name: "Destroyer 1",
                hp: 2e3,
                turnspeed: .7,
                price: 5e4,
                maxKrewCapacity: 12,
                cargoSize: 1e3,
                baseheight: 5,
                width: 9,
                depth: 22,
                arcFront: .2,
                arcBack: .1,
                inertia: 1,
                radius: 15,
                speed: 5.9,
                labelHeight: 24,
                regeneration: 1,
                body: "destroyer",
                sail: "destroyer",
                mast: "destroyer",
                scale: [3.5, 3.5, 3.5],
                offset: [0, -6, -3.3],
                rotation: [0, 0, 0]
            },
            11: {
                id: 11,
                image: '<img src="/assets/img/ships/destroyer.png" style="height: 40px">',
                name: "Destroyer 2",
                hp: 2700,
                turnspeed: .7,
                price: 75e3,
                maxKrewCapacity: 14,
                cargoSize: 1300,
                baseheight: 5,
                width: 11.5,
                depth: 25.3,
                arcFront: .23,
                arcBack: .1,
                inertia: 1,
                radius: 15,
                speed: 5.8,
                labelHeight: 28,
                regeneration: 1,
                body: "destroyer",
                sail: "destroyer",
                mast: "destroyer",
                scale: [4, 4, 4],
                offset: [0, -6.1, -3],
                rotation: [0, 0, 0]
            },
            12: {
                id: 12,
                image: '<img src="/assets/img/ships/destroyer.png" style="height: 45px">',
                name: "Destroyer 3",
                hp: 3800,
                turnspeed: .7,
                price: 1e5,
                maxKrewCapacity: 16,
                cargoSize: 1600,
                baseheight: 5,
                width: 11.5,
                depth: 28,
                arcFront: .2,
                arcBack: .07,
                inertia: 1,
                radius: 15,
                speed: 5.7,
                labelHeight: 33,
                regeneration: 1,
                body: "destroyer",
                sail: "destroyer",
                mast: "destroyer",
                scale: [4.5, 4.5, 4.5],
                offset: [0, -6.3, -3],
                rotation: [0, 0, 0],
                availableAt: ["Jamaica"]
            },
            13: {
                id: 13,
                image: '<img src="/assets/img/ships/babyFancy.png" style="height: 35px">',
                name: "Baby Fancy",
                hp: 300,
                turnspeed: 1,
                price: 3900,
                maxKrewCapacity: 3,
                cargoSize: 600,
                baseheight: 1.4,
                width: 4,
                depth: 6.5,
                arcFront: .3,
                arcBack: .1,
                inertia: .1,
                radius: 8,
                speed: 7.2,
                labelHeight: 16,
                regeneration: 1,
                body: "babyFancy",
                sail: "babyFancy",
                mast: "babyFancy",
                scale: [.15, .18, .12],
                offset: [0, 5.5, 0],
                rotation: [0, 0, 0],
                availableAt: ["Spain", "Brazil", "Cuba"]
            },
            14: {
                id: 14,
                image: '<img src="/assets/img/ships/babyFancy.png" style="height: 40px">',
                name: "Baby Fancy 2",
                hp: 500,
                turnspeed: 1,
                price: 27e3,
                maxKrewCapacity: 3,
                cargoSize: 900,
                baseheight: 1.4,
                width: 4,
                depth: 7,
                arcFront: .3,
                arcBack: .1,
                inertia: .1,
                radius: 8,
                speed: 7.1,
                labelHeight: 16,
                regeneration: 2,
                body: "babyFancy",
                sail: "babyFancy",
                mast: "babyFancy",
                scale: [.15, .18, .12],
                offset: [0, 5.5, 0],
                rotation: [0, 0, 0],
                availableAt: ["Jamaica"]
            },
            15: {
                id: 15,
                image: '<img src="/assets/img/ships/royalFortune.png" style="height: 35px">',
                name: "Royal Fortune",
                hp: 1200,
                turnspeed: .5,
                price: 7e4,
                maxKrewCapacity: 15,
                cargoSize: 1200,
                baseheight: 4,
                width: 10,
                depth: 26,
                arcFront: .3,
                arcBack: 0,
                inertia: .5,
                radius: 15,
                speed: 6.9,
                labelHeight: 45,
                regeneration: 1,
                body: "royalFortune",
                sail: "royalFortune",
                mast: "royalFortune",
                scale: [.15, .15, .15],
                offset: [2, 11.6, 3],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Labrador", "Spain", "Barbados", "Taiwan"]
            },
            16: {
                id: 16,
                image: '<img src="/assets/img/ships/royalFortune.png" style="height: 40px">',
                name: "Royal Fortune 2",
                hp: 1500,
                turnspeed: .6,
                price: 9e4,
                maxKrewCapacity: 18,
                cargoSize: 1400,
                baseheight: 4,
                width: 10,
                depth: 26,
                arcFront: .3,
                arcBack: 0,
                inertia: .5,
                radius: 15,
                speed: 6.7,
                labelHeight: 45,
                regeneration: 1,
                body: "royalFortune",
                sail: "royalFortune",
                mast: "royalFortune",
                scale: [.15, .15, .15],
                offset: [2, 11.6, 3],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Jamaica", "Taiwan"]
            },
            17: {
                id: 17,
                image: '<img src="/assets/img/ships/calmSpirit.png" style="height: 35px">',
                name: "Calm Spirit",
                hp: 1800,
                turnspeed: .7,
                price: 1e5,
                maxKrewCapacity: 18,
                cargoSize: 2e3,
                baseheight: 4,
                width: 10,
                depth: 30,
                arcFront: .3,
                arcBack: 0,
                inertia: .5,
                radius: 16,
                speed: 6.4,
                labelHeight: 39,
                regeneration: 3,
                body: "calmSpirit",
                sail: "calmSpirit",
                mast: "calmSpirit",
                scale: [.1, .1, .1],
                offset: [1, 10, 5],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Spain", "Guinea", "Cuba"]
            },
            18: {
                id: 18,
                image: '<img src="/assets/img/ships/calmSpirit.png" style="height: 45px">',
                name: "Calm Spirit 2",
                hp: 2300,
                turnspeed: .7,
                price: 15e4,
                maxKrewCapacity: 20,
                cargoSize: 2600,
                baseheight: 4,
                width: 10,
                depth: 30,
                arcFront: .3,
                arcBack: 0,
                inertia: .5,
                radius: 16,
                speed: 6.3,
                labelHeight: 39,
                regeneration: 4,
                body: "calmSpirit",
                sail: "calmSpirit",
                mast: "calmSpirit",
                scale: [.1, .1, .1],
                offset: [1, 10, 5],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Jamaica"]
            },
            19: {
                id: 19,
                image: '<img src="/assets/img/ships/junkie.png" style="height: 35px">',
                name: "Junkie",
                hp: 2500,
                turnspeed: .7,
                price: 12e4,
                maxKrewCapacity: 8,
                cargoSize: 4500,
                baseheight: 4,
                width: 10,
                depth: 34,
                arcFront: .2,
                arcBack: 0,
                inertia: 1,
                radius: 15,
                speed: 6.4,
                labelHeight: 28,
                regeneration: 2,
                body: "junkie",
                sail: "junkie",
                mast: "junkie",
                scale: [.12, .12, .12],
                offset: [0, 18, 0],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Spain", "Jamaica", "Taiwan"]
            },
            20: {
                id: 20,
                image: '<img src="/assets/img/ships/raider.png" style="height: 35px">',
                name: "Raider",
                hp: 1200,
                turnspeed: .9,
                price: 15e4,
                maxKrewCapacity: 6,
                cargoSize: 1e3,
                baseheight: 2,
                width: 5.6,
                depth: 22,
                arcFront: .18,
                arcBack: .18,
                inertia: .5,
                radius: 15,
                speed: 6.9,
                labelHeight: 18,
                regeneration: 1,
                body: "raider",
                sail: "raider",
                mast: "raider",
                scale: [.12, .12, .12],
                offset: [0, 19, -1],
                rotation: [0, 0, 0],
                availableAt: ["Spain"]
            },
            21: {
                id: 21,
                image: '<img src="/assets/img/ships/queenBarbsJustice.png" style="height: 45px">',
                name: "Queen Barb's Justice",
                hp: 3e3,
                turnspeed: .7,
                price: 15e4,
                maxKrewCapacity: 20,
                cargoSize: 3e3,
                baseheight: 5,
                width: 8,
                depth: 38,
                arcFront: .09,
                arcBack: .05,
                inertia: 1,
                radius: 20,
                speed: 5.9,
                labelHeight: 46,
                regeneration: 5,
                body: "queenBarbsJustice",
                sail: "queenBarbsJustice",
                mast: "queenBarbsJustice",
                scale: [.1, .1, .1],
                offset: [1, 13.4, 1],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Spain", "Malaysia"]
            },
            22: {
                id: 22,
                image: '<img src="/assets/img/ships/queenBarbsJustice.png" style="height: 50px">',
                name: "Queen Barb's Justice 2",
                hp: 4e3,
                turnspeed: .7,
                price: 225e3,
                maxKrewCapacity: 25,
                cargoSize: 4e3,
                baseheight: 5,
                width: 8,
                depth: 38,
                arcFront: .09,
                arcBack: .05,
                inertia: 1,
                radius: 20,
                speed: 5.8,
                labelHeight: 46,
                regeneration: 9,
                body: "queenBarbsJustice",
                sail: "queenBarbsJustice",
                mast: "queenBarbsJustice",
                scale: [.1, .1, .1],
                offset: [1, 13.4, 1],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Jamaica"]
            },
            23: {
                id: 23,
                image: '<img src="/assets/img/ships/blackOyster.png" style="height: 35px">',
                name: "Black Oyster",
                hp: 6e3,
                turnspeed: .8,
                price: 55e4,
                maxKrewCapacity: 30,
                cargoSize: 1500,
                baseheight: 6,
                width: 11.5,
                depth: 45,
                arcFront: .14,
                arcBack: .08,
                inertia: 1,
                radius: 20,
                speed: 6.4,
                labelHeight: 53,
                regeneration: 5,
                body: "blackOyster",
                sail: "blackOyster",
                mast: "blackOyster",
                scale: [.12, .12, .12],
                offset: [0, 16.4, -1],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Jamaica", "Spain"]
            },
            24: {
                id: 24,
                image: '<img src="/assets/img/ships/fortuneTrader.png" style="height: 50px">',
                name: "Fortune Trader",
                hp: 7500,
                turnspeed: .6,
                price: 6e5,
                maxKrewCapacity: 20,
                cargoSize: 1e4,
                baseheight: 6.2,
                width: 15,
                depth: 64,
                arcFront: .14,
                arcBack: .12,
                inertia: 1,
                radius: 20,
                speed: 5,
                labelHeight: 76,
                regeneration: 1,
                body: "fortuneTrader",
                sail: "fortuneTrader",
                mast: "fortuneTrader",
                scale: [.16, .16, .16],
                offset: [0, 20, 7],
                rotation: [0, Math.PI / 2, 0],
                availableAt: ["Guinea"]
            },
            25: {
                id: 25,
                image: '<img src="/assets/img/ships/blackOyster.png" style="height: 35px">',
                name: "Night Wind",
                hp: 4500,
                turnspeed: .7,
                price: 65e4,
                maxKrewCapacity: 15,
                cargoSize: 1e3,
                baseheight: 6,
                width: 12.5,
                depth: 36,
                arcFront: .08,
                arcBack: .08,
                inertia: 1,
                radius: 20,
                speed: 7,
                labelHeight: 53,
                regeneration: 3,
                body: "nightWind",
                sail: "nightWind",
                mast: "nightWind",
                scale: [1, 1, 1],
                offset: [0, 0, 0],
                rotation: [0, 0, 0],
                availableAt: ["Cuba"]
            }
        },
        a = {
            rum: {
                cargoSpace: 10
            },
            coffee: {
                cargoSpace: 5
            },
            spice: {
                cargoSpace: 8
            },
            silk: {
                cargoSpace: 15
            },
            gems: {
                cargoSpace: 20
            },
            sugar: {
                cargoSpace: 12
            },
            bananas: {
                cargoSpace: 5
            }
        };
    let o, i, s, r, n, l, d, c, p, m, h, u, g, b, y, f, v, w, k, E, x, C = {},
        T = {},
        S = {},
        M = {},
        I = {},
        R = {},
        z = {},
        P = {},
        H = {},
        L = {},
        D = {},
        F = {},
        q = [],
        B = [],
        A = [],
        j = [],
        W = [],
        O = "",
        N = 10,
        _ = 1,
        V = 2e3,
        K = e.worldsize / 2,
        G = 0,
        U = !1,
        J = !1,
        Y = !1,
        X = !1,
        Q = !1,
        Z = !1,
        ee = !0,
        te = !1,
        ae = !1,
        oe = !1,
        ie = !1,
        se = !1,
        re = new THREE.TextureLoader,
        ne = (new THREE.FileLoader, new THREE.OBJLoader),
        le = new THREE.TGALoader,
        de = new THREE.MTLLoader,
        ce = performance.now(),
        pe = {
            $shoppingList: $("#shopping-item-list")
        },
        me = {
            box: new THREE.BoxBufferGeometry(1, 1, 1),
            sphere: new THREE.SphereBufferGeometry(.65),
            line: new THREE.Geometry,
            plane: new THREE.PlaneGeometry(2, 2)
        },
        he = {
            boat: new THREE.MeshLambertMaterial({
                color: 9064510,
                side: THREE.DoubleSide
            }),
            sail: new THREE.MeshLambertMaterial({
                color: 16777215,
                side: THREE.DoubleSide
            }),
            splinter: new THREE.MeshLambertMaterial({
                color: 13479055,
                flatShading: !0
            }),
            boundary: new THREE.MeshLambertMaterial({
                color: 11856895,
                flatShading: !0,
                opacity: .8,
                transparent: !0
            }),
            impact_water: new THREE.MeshBasicMaterial({
                color: 15331839,
                flatShading: !0,
                opacity: .9,
                transparent: !0
            }),
            islandradius: new THREE.MeshBasicMaterial({
                color: 13957119,
                flatShading: !1,
                opacity: .2,
                transparent: !0
            }),
            smoke_enemy: new THREE.MeshBasicMaterial({
                color: 16763594,
                flatShading: !0,
                opacity: .7,
                transparent: !0
            }),
            smoke_friendly: new THREE.MeshBasicMaterial({
                color: 15204326,
                flatShading: !0,
                opacity: .7,
                transparent: !0
            }),
            smoke_player: new THREE.MeshBasicMaterial({
                color: 14687774,
                flatShading: !0,
                opacity: .5,
                transparent: !0
            }),
            sky: new THREE.MeshBasicMaterial({
                color: 50687,
                side: THREE.DoubleSide
            })
        },
        ue = {
            admin: new THREE.Color(2790137),
            mod: new THREE.Color(10306789),
            helper: new THREE.Color(6548733),
            designer: new THREE.Color(6321663),
            myself: new THREE.Color(2945583),
            clan: new THREE.Color(16757777),
            captain: new THREE.Color(16732416),
            krewmate: new THREE.Color(16741952),
            player: new THREE.Color(16777215),
            boat: new THREE.Color(12952444),
            landmark: new THREE.Color(6198824),
            crosshair: new THREE.Color(16777215)
        },
        ge = {
            modeloffsetCrab: new THREE.Vector3(0, .9, 0),
            modeloffsetFishShellClam: new THREE.Vector3(0, .3, 0),
            sizePlayer: new THREE.Vector3(1, 1, 1),
            sizeProjectile: new THREE.Vector3(.3, .3, .3)
        },
        be = (e, t) => {
            if (void 0 === T[e]) {
                switch (t.n) {
                    case 0:
                        T[e] = new vt(t), T[e].playerModel = t.playerModel ? t.playerModel : 0, T[e].hatModel = t.hatModel ? t.hatModel : 0, e === O && (u = T[e], u.isPlayer = !0);
                        break;
                    case 1:
                        T[e] = new gt(t.t.b);
                        break;
                    case 2:
                        T[e] = new wt;
                        break;
                    case 3:
                        T[e] = new bt(parseInt(t.t.a), parseFloat(t.x), parseFloat(t.z));
                        break;
                    case 4:
                        T[e] = new ft(parseInt(t.t.s), parseFloat(t.x), parseFloat(t.z), parseInt(t.t.t));
                        break;
                    case 5:
                        T[e] = new yt(parseInt(t.t.t), parseFloat(t.x), parseFloat(t.z), t.t)
                }
                void 0 !== T[e] && (T[e].id = e, T[e].createBody())
            }
            void 0 !== T[e] && T[e].parseSnap(t, e)
        };
    window.logoutUser = () => {
        ze.invalidateCookie("username"), ze.invalidateCookie("token"), window.location.pathname = "/auth/logout"
    };
    let ye = () => {
        y && y.setSize(window.innerWidth, window.innerHeight), o && (o.aspect = window.innerWidth / window.innerHeight, o.updateProjectionMatrix())
    };
    window.addEventListener("resize", ye, !1);
    let fe = () => {
        switch (parseInt($("#quality-list").val())) {
            case 1:
                if (void 0 !== p) {
                    let e = d / 2.5,
                        t = l / 2.5;
                    p.canvas.height = t, p.canvas.width = e, p.viewport(0, 0, e, e), y.setSize(e, e, !1)
                }
                break;
            case 2:
                if (void 0 !== p) {
                    let e = d / 1.45,
                        t = l / 1.45;
                    p.canvas.height = t, p.canvas.width = e, p.viewport(0, 0, e, t), y.setSize(e, e, !1)
                }
                break;
            case 3:
                if (void 0 !== p) {
                    let e = d,
                        t = l;
                    p.canvas.height = t, p.canvas.width = e, p.viewport(0, 0, e, t), y.setSize(e, e, !1)
                }
        }
    };
    window.updateInputRange = e => {
        let t = e.parent().find("output"),
            a = e.attr("min"),
            o = (e.attr("max") - a) / 100,
            i = e.val(),
            s = (i - a) / o;
        t.html(i), e.attr("style", `--value:${s}`), t.attr("style", `left:${s}%; transform: translate(-${s}%);`)
    }, window.inputRange = e => {
        e.on("input change", (() => updateInputRange(e)))
    };
    let ve = e => {
            let t = `${e}`;
            return t.length < 2 ? `0${t}` : t
        },
        we = (e, t) => {
            t(e);
            let a = e.children;
            for (let e in a) we(a[e], t)
        },
        $e = e => {
            let t;
            for (let a = 0, o = e.length; a < o; a++)
                if (t = e.charCodeAt(a), !(t > 47 && t < 58 || t > 64 && t < 91 || t > 96 && t < 123 || 190 === t || 46 === t)) return !1;
            return !0
        },
        ke = () => {
            let e = {};
            return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, ((t, a, o) => {
                e[a] = o
            })), e
        },
        Ee = (e, t, a) => {
            let o = Math.round((t.r - e.r) * a + e.r),
                i = Math.round((t.g - e.g) * a + e.g),
                s = Math.round((t.b - e.b) * a + e.b);
            return 16777216 + 65536 * (o < 255 ? o < 1 ? 0 : o : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (s < 255 ? s < 1 ? 0 : s : 255)
        },
        xe = (setInterval((() => {
            Pt()
        }), 9e4), e => e * (2 - e)),
        Ce = (e, t, a) => (1 - a) * e + a * t,
        Te = e => !0 === e || "true" === e,
        Se = (e, t) => {
            let a = t.x - e.x,
                o = t.z - e.z;
            return Math.sqrt(a * a + o * o)
        };
    const Me = e => new THREE.Vector2(-Math.sin(e), -Math.cos(e));
    let Ie = e => {
            if (0 === Object.keys(e).length && e.constructor === Object) return !0;
            for (let t in e)
                if (e.hasOwnProperty(t) && void 0 !== e[t]) return !1;
            return !0
        },
        Re = function() {
            let e = new THREE.Frustum;
            return (t, a) => void 0 !== t.position && (a.updateMatrix(), a.updateMatrixWorld(), e.setFromMatrix((new THREE.Matrix4).multiplyMatrices(a.projectionMatrix, a.matrixWorldInverse)), e.containsPoint(t.position))
        }(),
        ze = {
            username: void 0,
            password: void 0,
            setCookie: function(e, t, a) {
                let o = new Date;
                o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3);
                let i = `expires=${o.toUTCString()}`;
                document.cookie = `${e}=${t};${i};path=/`
            },
            getCookie: function(e) {
                let t = document.cookie.split(";");
                for (let a in t) {
                    let o = t[a],
                        i = o.split("=")[0],
                        s = o.split("=")[1];
                    if (i.trim() === e) return s
                }
            },
            invalidateCookie: function(e) {
                let t = document.cookie.split(";");
                for (let a in t) {
                    let o = t[a].split("=")[0];
                    o.trim() === e && (document.cookie = `${o}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`)
                }
            }
        },
        Pe = () => {
            $("#login-msg").html(`Logged in as <b>${ze.username}</b>.`)
        },
        He = () => {
            $("#chat-global").addClass("active"), $("#chat-local").removeClass("active"), $("#chat-clan").removeClass("active"), $("#chat-staff").removeClass("active"), $(".global-chat").show(), $(".local-chat").hide(), $(".clan-chat").hide(), $(".staff-chat").hide(), X = !1, Q = !1, Z = !1, ee = !0, $("#global-chat-alert").hide()
        },
        Le = () => {
            $("#chat-global").removeClass("active"), $("#chat-clan").removeClass("active"), $("#chat-local").addClass("active"), $("#chat-staff").removeClass("active"), $(".global-chat").hide(), $(".local-chat").show(), $(".clan-chat").hide(), $(".staff-chat").hide(), X = !1, Q = !1, Z = !0, ee = !1, $("#local-chat-alert").hide()
        },
        De = () => {
            $("#chat-global").removeClass("active"), $("#chat-local").removeClass("active"), $("#chat-clan").addClass("active"), $("#chat-staff").removeClass("active"), $(".global-chat").hide(), $(".local-chat").hide(), $(".clan-chat").show(), $(".staff-chat").hide(), X = !1, Q = !0, Z = !1, ee = !1, $("#clan-chat-alert").hide()
        },
        Fe = () => {
            $("#chat-global").removeClass("active"), $("#chat-local").removeClass("active"), $("#chat-clan").removeClass("active"), $("#chat-staff").addClass("active"), $(".global-chat").hide(), $(".local-chat").hide(), $(".clan-chat").hide(), $(".staff-chat").show(), X = !0, Q = !1, Z = !1, ee = !1, $("#staff-chat-alert").hide()
        },
        qe = () => {
            s.scrollTop = g, g += .25, k = s.scrollTop >= s.scrollHeight - s.offsetHeight
        };
    s = document.querySelector("#chat-history"), k = !1, s.scrollTop = 0, g = 0, v = setInterval(qe, 1), s.addEventListener("mouseover", (() => {
        clearInterval(v)
    })), s.addEventListener("mouseout", (() => {
        g = s.scrollTop, v = setInterval(qe, 1)
    }));
    let Be = {
            keys: {
                53: "fireRate",
                54: "distance",
                55: "damage"
            },
            getList: () => {
                Be.removeListeners().clearStore().setStore((() => {
                    Be.setContent().setListeners()
                }))
            },
            removeListeners: () => (void 0 !== pe.$html && (pe.$html.children().off(), pe.$html.off()), Be),
            clearStore: () => (Object.assign(pe, {
                $html: void 0,
                points: {},
                originalPoints: 0,
                availablePoints: 0,
                usedPoints: 0,
                allocatedPoints: {},
                pointsTr: {},
                experience: u ? u.experience : 0
            }), Be),
            setStore: e => {
                w.emit("getExperiencePoints", ((t, a) => {
                    if (!t) {
                        Object.assign(pe, a), u && (u.experience = a.experience, u.points = a.points);
                        for (let e in pe.points) pe.allocatedPoints[e] = 0;
                        pe.originalPoints = pe.availablePoints, e && e.call && e(pe)
                    }
                }))
            },
            setContent: () => ($("<div/>").append(Be.getPointsList()), 0 === pe.originalPoints && $("<div/>").find(".btn-allocate-points").attr("disabled", !0), pe.$html = $("<div/>"), pe.$shoppingList.html(pe.$html), Be),
            setListeners: () => {
                $("input[type=range]").each((function() {
                    inputRange($(this))
                }));
                for (let e in pe.pointsTr) Be.setInputRangeListeners(pe.pointsTr[e], e);
                return pe.$html.find(".btn-allocate-points").one("click", (e => {
                    e.preventDefault(), Be.allocatePoints((() => {
                        Be.getList()
                    }))
                })), Be
            },
            allocatePoints: e => {
                w.emit("allocatePoints", pe.allocatedPoints, (t => {
                    t || "function" == typeof e && e()
                }))
            },
            setInputRangeListeners: (e, t) => {
                let a = e.find("input");
                a.on("change input", (() => {
                    Be.updateAvailablePoints();
                    let e = parseInt(a.val()) - pe.points[t];
                    e <= 0 && (e = 0), e > pe.allocatedPoints[t] + pe.availablePoints && (e = pe.allocatedPoints[t] + pe.availablePoints), pe.availablePoints <= 0 && e >= pe.allocatedPoints[t] && (e = pe.allocatedPoints[t]), pe.allocatedPoints[t] = e, e += pe.points[t], a.val(e), updateInputRange(a), Be.updateAvailablePoints(), pe.$html.find("h6").html(`Available points: ${pe.originalPoints}<span class="float-right">Points left: ${pe.availablePoints}</span>`), Ae()
                })).trigger("change")
            },
            updateAvailablePoints: () => {
                pe.usedPoints = 0;
                for (let e in pe.allocatedPoints) pe.usedPoints += pe.allocatedPoints[e];
                return pe.availablePoints = pe.originalPoints - pe.usedPoints, Be
            },
            getPointsList: () => {
                let e, t, a = "";
                a += "<div>", a += `    <h6>Available points: ${pe.originalPoints}<span class="float-right">Points left: ${pe.availablePoints}</span></h6>`, a += '    <table class="table table-sm">', a += "        <thead><tr><th>Name</th><th>Quantity</th></tr></thead>", a += "        <tbody></tbody>", a += "    </table>", a += '    <button class="btn btn-primary float-right btn-allocate-points">Allocate points</button>', a += "</div>", e = $(a), t = e.find("tbody");
                for (let e in pe.points) {
                    let a = "";
                    a += "<tr>", a += `    <td>${e}</td>`, a += "    <td>", a += '        <div class="range-group">', a += `            <input type="range" min="0" max="50" step="1" value="${pe.points[e]}">`, a += "            <output></output>", a += "        </div>", a += "    </td>", a += "</tr>", pe.pointsTr[e] = $(a), t.append(pe.pointsTr[e])
                }
                return e
            },
            checkButtonTab: () => {
                Be.clearStore().setStore((e => {
                    e.originalPoints > 0 ? $("#experience-points").show(0) : $("#experience-points").hide(0)
                }))
            }
        },
        Ae = () => {
            $(".level-up-button").off(), Be.clearStore().setStore((e => {
                e.originalPoints > 0 && ($(".level-up-button").show(0), $(".level-up-button").one("click", (function() {
                    e.allocatedPoints[$(this).attr("data-attribute")] = 1, Be.allocatePoints((() => {
                        Ae()
                    }))
                }))), e.originalPoints <= 0 && $(".level-up-button").hide(0);
                let t = u.experience,
                    a = parseInt(u.level),
                    o = a + 1,
                    i = u.experienceNeededForLevels[a].total,
                    s = u.experienceNeededForLevels[o].total,
                    r = parseInt((t - i) / (s - i) * 100);
                $("#experience-bar").attr("data-info", `Level ${a}`), $(".experience-attribute-fireRate").find("span").html(u.points.fireRate), $(".experience-attribute-damage").find("span").html(u.points.damage), $(".experience-attribute-distance").find("span").html(u.points.distance), a === u.experienceMaxLevel ? $("#experience-bar").find("div").attr("style", "width: 100%") : $("#experience-bar").find("div").attr("style", `width: ${r}%`)
            }))
        },
        je = e => {
            r.unLockMouseLook(), $(".local-chat").remove(), $("#game-over-modal").show(), We(e), u.state = 1
        },
        We = e => {
            $("#gold-cut").html((.3 * e).toFixed(0)), $("#docking-modal").is(":visible") && $("#docking-modal").hide()
        },
        Oe = function(e, t, a) {
            let o = "";
            switch (t) {
                case void 0:
                    o = "info";
                    break;
                case 1:
                    o = "danger";
                    break;
                case 3:
                    o = "success";
                    break;
                case 4:
                    o = "info"
            }
            GrowlNotification.notify({
                description: e,
                closeTimeout: void 0 === a ? 4e3 : a,
                position: "top-center",
                animationOpen: "slide-in",
                animationClose: "fade-out",
                type: o,
                imageVisible: !0,
                imageCustom: `../assets/img/notifications/${o}-new.png`
            })
        },
        Ne = function(e) {
            GrowlNotification.notify({
                title: "Message from admin:",
                description: e,
                closeTimeout: 8e3,
                position: "top-center",
                animationOpen: "slide-in",
                animationClose: "fade-out",
                type: "info",
                imageVisible: !0,
                imageCustom: "../assets/img/notifications/info-new.png"
            })
        },
        _e = function(e) {
            GrowlNotification.notify({
                description: e,
                closeTimeout: 5e3,
                position: "top-right",
                animationOpen: "slide-in",
                animationClose: "fade-out",
                type: "danger",
                imageVisible: !0,
                imageCustom: "../assets/img/tools/cannon32x32.png"
            })
        },
        Ve = function(e, t) {
            let a;
            switch (t) {
                case void 0:
                case 1:
                    a = "#a94442";
                    break;
                case 2:
                    a = "#3c763d"
            }
            let o = $("<div/>", {
                class: "text-xs-center",
                text: e,
                style: `color: ${a}`
            }).delay(3e3).fadeOut("slow");
            $("#center-div div").length > 3 && $("#center-div div:last-child").remove(), $("#center-div").prepend(o)
        },
        Ke = () => {
            let e = +$("#make-deposit").val(),
                t = parseInt($("#my-deposits").text()) + e;
            e <= u.gold && t <= 15e4 ? (w.emit("bank", {
                deposit: e
            }), Rt.playAudioFile(!1, !1, 1, "deposit"), $("#make-deposit").val("").focus(), $("#successMakeDepoMess").show(), $("#errorMakeDepoMess").hide(), $("#successTakeDepoMess").hide(), $("#errorTakeDepoMess").hide(), $("#errorFullDepoMess").hide()) : t > 15e4 ? ($("#errorFullDepoMess").show(), $("#successMakeDepoMess").hide(), $("#errorMakeDepoMess").hide(), $("#successTakeDepoMess").hide(), $("#errorTakeDepoMess").hide()) : ($("#errorMakeDepoMess").show(), $("#successMakeDepoMess").hide(), $("#successTakeDepoMess").hide(), $("#errorTakeDepoMess").hide(), $("#errorFullDepoMess").hide())
        },
        Ge = () => {
            let e = +$("#take-deposit").val();
            e <= +$("#my-deposits").text() ? (w.emit("bank", {
                takedeposit: e
            }), $("#take-deposit").val("").focus(), $("#successTakeDepoMess").show(), $("#successMakeDepoMess").hide(), $("#errorMakeDepoMess").hide(), $("#errorTakeDepoMess").hide(), $("#errorFullDepoMess").hide()) : ($("#errorTakeDepoMess").show(), $("#successTakeDepoMess").hide(), $("#successMakeDepoMess").hide(), $("#errorMakeDepoMess").hide(), $("#errorFullDepoMess").hide())
        },
        Ue = {
            setClanData: function(e) {
                if (void 0 !== u.clan && "" !== u.clan || u.clanRequest && "" !== u.clanRequest)
                    if (u.clanRequest && "" !== u.clanRequest) {
                        $("#clan-name").text("You already requested to join a clan"), $("#yes-clan").hide(), $("#no-clan").hide(), $("#request-clan").show();
                        let e = $("#player-request-table"),
                            t = "<tr><th>Request</th><th>Action</th></tr>";
                        e.html(t);
                        let a = `<tr><td>${u.clanRequest}</td><td><div data-tooltip="Cancel request" data-tooltip-location="bottom" style="display: inline-block"><i data-event="cancel-request" class="icofont icofont-close btn btn-danger clan-button"></i></div></td></tr>`;
                        e.append(a)
                    } else $("#clan-name").text(`Your clan: [${u.clan}]`), $("#yes-clan").show(), $("#request-clan").hide(), $("#no-clan").hide(), $("#request-clan-button").hide(), $("#yes-clan").is(":visible") && "force" !== e || w.emit("clan", "get-data", (e => {
                        let t = $("#clan-table"),
                            a = `<tr><th>Player name</th><th>Clan Role</th>${!0===u.clanLeader||!0===u.clanOwner?"<th>Action</th>":""}</tr>`;
                        t.html(a);
                        for (let a in e.clanLeader) {
                            let o;
                            o = e.clanLeader[a] === e.clanOwner ? `<tr><td>${e.clanLeader[a]}</td><td>Owner</td></tr>` : `<tr><td>${e.clanLeader[a]}</td><td>Leader</td>${!0===u.clanOwner?`<td><div data-tooltip="Kick from clan" data-tooltip-location="top" style="display: inline-block"><i data-event="kick-clan" data-id="${e.clanLeader[a]}" class="icofont icofont-delete btn btn-danger clan-button"></i></div></td>`:""}</tr>`, t.append(o)
                        }
                        for (let a in e.clanMembers)
                            if (!e.clanLeader.includes(e.clanMembers[a])) {
                                let o = `<tr><td>${e.clanMembers[a]}</td><td>Member</td>${!0===u.clanOwner?`<td><div data-tooltip="Promote to clan leader" data-tooltip-location="top" style="display: inline-block"><i data-event="promote-clan" data-id="${e.clanMembers[a]}" class="icofont icofont-arrow-up btn btn-success clan-button"></i></div><div data-tooltip="Kick from clan" data-tooltip-location="top" style="display: inline-block"><i data-event="kick-clan" data-id="${e.clanMembers[a]}" class="icofont icofont-delete btn btn-danger clan-button"></i></div></td>`:!0===u.clanLeader?`<td><div data-tooltip="Kick from clan" data-tooltip-location="top" style="display: inline-block"><i data-event="kick-clan" data-id="${e.clanMembers[a]}" class="icofont icofont-delete btn btn-danger clan-button"></i></div></td>`:""}</tr>`;
                                t.append(o)
                            } let o = $("#request-clan-button");
                        if ((!0 === u.clanLeader || !0 === u.clanOwner) && ($("#request-clan-button").show(), o.show(), e.clanRequests)) {
                            e.clanRequests.length > 0 ? o.removeClass("btn-warning disabled").addClass("btn-success").text(`View requests (${e.clanRequests.length})`).attr("disabled", !1) : 0 === e.clanRequests.length && o.removeClass("btn-success").addClass("btn-warning disabled").text(`View requests (${e.clanRequests.length})`).prop("disabled", !0);
                            let t = $("#clan-request-table"),
                                a = "<tr><th>Player name</th><th>Action</th></tr>";
                            t.html(a);
                            for (let a in e.clanRequests) {
                                let o = `<tr><td>${e.clanRequests[a]}<td><div data-tooltip="Accept request" data-tooltip-location="bottom" style="display: inline-block"><i data-event="accept-request" data-id="${e.clanRequests[a]}" class="icofont icofont-check btn btn-success clan-button"></i></div><div data-tooltip="Reject request" data-tooltip-location="bottom" style="display: inline-block"><i data-event="decline-request" data-id="${e.clanRequests[a]}" class="icofont icofont-close btn btn-danger clan-button"></i></div></td></tr>`;
                                t.append(o)
                            }
                        }
                    }));
                else $("#clan-name").text("You don't have any clan yet"), $("#yes-clan").hide(), $("#request-clan").hide(), $("#no-clan").show(), Ue.hideAllClanErrors()
            },
            hideAllClanErrors: function() {
                $("#errorInput").hide(), $("#errorLength").hide(), $("#error404").hide(), $("#errorExists").hide(), $("#errorUndefined").hide(), $("#errorUnauthorized").hide()
            }
        };
    ! function(e) {
        let a = hyperapp.h,
            o = {
                boats: []
            },
            i = {
                boats: () => function(e) {
                    let t, a = [];
                    if ("object" == typeof T && null !== T)
                        for (let e in T) t = T[e], u && t && t.anchorIslandId && (3 === t.shipState || 2 === t.shipState || -1 === t.shipState || 4 === t.shipState) && !0 === t.recruiting && (1 === u.parent.netType && t.anchorIslandId === u.parent.anchorIslandId || t.anchorIslandId === u.parent.id) && (a.push(t), $("#docked-krews-count").html(a.length));
                    return a.sort(((e, t) => e.departureTime === t.departureTime ? e.id < t.id ? -1 : e.id === t.id ? 0 : 1 : e.departureTime - t.departureTime)), 0 === a.length && $("#toggle-krew-list-modal-button").popover("hide"), {
                        boats: a
                    }
                }
            },
            s = (e, o) => a("div", {}, [a("table", {
                class: "table table-sm"
            }, [a("thead", {
                class: "thead-inverse"
            }, [a("tr", {}, [a("th", {}, "Krew Name"), a("th", {}, "Capacity"), a("th")])]), a("tbody", {}, e.boats.map((e => {
                if (void 0 !== u && void 0 !== u.parent && void 0 !== e && void 0 !== T[e.captainId]) return e.id, $(document).on("click", `#${e.id}`, (() => {
                    let t = e.id;
                    void 0 !== T[t] && T[t].maxKrewCapacity !== T[t].krewCount && T[t].captainId !== O && w.emit("joinKrew", t, (e => {
                        0 === e && ($("#exit-island-button").hide(), $("#toggle-invite-link-button").hide(), $("#invite-div").hide(), $("#departure-modal").is(":visible") && $("#departure-modal").hide(), "undefined" != typeof GameAnalytics && GameAnalytics("addDesignEvent", "Game:Session:JoinedBoat"), $("#krew-hud").show(), $("#abandon-ship-button").show())
                    }))
                })), a("tr", {
                    key: e.id
                }, [a("td", {}, [`${e.crewName}(${t[e.shipclassId].name})`, a("br"), a("small", {}, 4 === e.shipState ? `Departing in ${Math.round(e.departureTime)} seconds` : "")]), a("td", {}, `${e.krewCount}/${t[e.shipclassId].maxKrewCapacity}`), a("td", {}, e.id === u.parent.id ? "My Krew" : a("button", {
                    id: e.id,
                    class: "btn btn-primary btn-md",
                    role: "button",
                    disabled: void 0 === T[e.id] || T[e.id].maxKrewCapacity === T[e.id].krewCount || T[e.id].captainId === O
                }, "Join"))])
            })))])]);
        e.KREWLISTCOMPONENT = hyperapp.app(o, i, s, document.getElementById("krews-list")), e.DEPARTINGKREWLISTCOMPONENT = hyperapp.app(o, i, s, document.getElementById("departing-krews-list"))
    }(window);
    let Je = ((e, t) => {
            e = e || 5;
            let a = performance.now(),
                o = performance.now();
            return function() {
                a = performance.now(), a - o > 1e3 / e && (o = a, requestAnimationFrame(t.bind(this)))
            }
        })(2, (() => {
            KREWLISTCOMPONENT.boats(), DEPARTINGKREWLISTCOMPONENT.boats()
        })),
        Ye = {
            getList: () => {
                Ye.removeListeners().clearStore().setStore((() => {
                    Ye.setContent().setListeners()
                }))
            },
            removeListeners: () => (void 0 !== pe.$html && (pe.$html.children().off(), pe.$html.off()), Ye),
            clearStore: () => (Object.assign(pe, {
                goodsPrice: {},
                goods: {},
                cargo: 0,
                cargoUsed: 0,
                gold: 0,
                $html: void 0,
                inventory: {},
                stock: {}
            }), Ye),
            setStore: e => {
                u && u.parent && (5 === u.parent.netType || 1 !== u.parent.shipState && 0 !== u.parent.shipState) && w.emit("getGoodsStore", ((t, a) => {
                    t || Object.assign(pe, a), e && e.call && e()
                }))
            },
            setContent: () => {
                let e = $('<div class="stock d-flex"/>');
                return 0 === Object.keys(pe.goodsPrice).length && u.parent && 1 !== u.parent.netType && e.append('<div class="col-xs-12 trading"><h5 class="text-warning">You must own a ship, or join a krew before buying supplies</h5></div>'), Object.keys(pe.goodsPrice).length > 0 && (e.append(Ye.getInventory()), e.append(Ye.getGoods())), pe.$html = e, pe.$shoppingList.html(pe.$html), Ye
            },
            setListeners: () => {
                $("input[type=range]").each((function() {
                    inputRange($(this))
                }));
                for (let e in pe.inventory) Ye.setInputRangeListeners(pe.inventory[e], e, "sell");
                for (let e in pe.stock) Ye.setInputRangeListeners(pe.stock[e], e, "buy");
                return Ye
            },
            setInputRangeListeners: (e, t, o) => {
                let i = e.find(`.btn-${o}`),
                    s = e.find(".ui-slider"),
                    r = s.find(".ui-slider-handle"),
                    n = {
                        create: function() {
                            r.text(s.slider("value"))
                        },
                        slide: function(e, a) {
                            r.text(a.value);
                            let s = +a.value * pe.goodsPrice[t],
                                n = "sell" === o ? "+" : "-";
                            i.html((s > 0 ? n : "") + s)
                        }
                    };
                if ("sell" === o && (n.max = pe.goods[t]), "buy" === o) {
                    let e = parseInt(pe.gold / pe.goodsPrice[t]),
                        o = (pe.cargo - pe.cargoUsed) / a[t].cargoSpace;
                    e > o && (e = o), e = Math.floor(e), n.max = e
                }
                s.slider(n), i.one("click", (e => {
                    e.preventDefault(), "undefined" != typeof GameAnalytics && GameAnalytics("addDesignEvent", "Game:Session:Trade"), s.slider("value") > 0 && w.emit("buy-goods", {
                        quantity: s.slider("value"),
                        action: o,
                        good: t
                    }, ((e, t) => {
                        e || (u.gold = t.gold, u.goods = t.goods), Ye.getList()
                    }))
                }))
            },
            getInventory: () => {
                let e, t, o = "";
                o += '<div class="col-xs-12 col-sm-6 trading">', o += `    <h6>Your ship's cargo ${pe.cargoUsed}/${pe.cargo}</h6>`, o += '    <table class="table table-sm">', o += "        <thead><tr><th>Name</th><th>Quantity</th><th></th><th>Sell</th></tr></thead>", o += "        <tbody></tbody>", o += "    </table>", o += "    <br>", o += "</div>", e = $(o), t = e.find("tbody");
                for (let e in pe.goods)
                    if (pe.goods[e] > 0 && void 0 !== pe.goodsPrice[e]) {
                        let o = "";
                        o += "<tr>", o += "    <td>", o += `        ${e}`, o += `        <label>$${pe.goodsPrice[e]} each</label>`, o += `        <label>${a[e].cargoSpace} cargo</label>`, o += "    </td>", o += "    <td>", o += '        <div class="ui-slider" style="margin-top: 10px">', o += '            <div class="ui-slider-handle" style="width: 3em;height: 1.6em;top: 50%;margin-top: -.8em;text-align: center;line-height: 1.6em;"></div>', o += "        </div>", o += "    </td>", o += `    <td style="padding-top: 5px">${pe.goods[e]}</td>`, o += "    <td>", o += '        <button class="btn btn-success btn-sm btn-sell">0</button>', o += "    </td>", o += "</tr>", pe.inventory[e] = $(o), t.append(pe.inventory[e])
                    } return e
            },
            getGoods: () => {
                let e, t, o = "";
                o += '<div class="col-xs-12 col-sm-6 trading">', o += "    <h6>Merchant</h6>", o += '    <table class="table table-sm">', o += "        <thead><tr><th>Name</th><th>Quantity</th><th></th><th>Buy</th></tr></thead>", o += "        <tbody></tbody>", o += "    </table>", o += "    <br>", o += "</div>", e = $('<div class="col-xs-12 col-sm-6 trading">    <h6>Merchant</h6>    <table class="table table-sm">        <thead><tr><th>Name</th><th>Quantity</th><th></th><th>Buy</th></tr></thead>        <tbody></tbody>    </table>    <br></div>'), t = e.find("tbody");
                for (let e in pe.goodsPrice)
                    if (void 0 !== pe.goods[e]) {
                        let o = parseInt(pe.gold / pe.goodsPrice[e]),
                            i = (pe.cargo - pe.cargoUsed) / a[e].cargoSpace,
                            s = "";
                        o > i && (o = i), o = Math.floor(o), s += "<tr>", s += "    <td>", s += `        ${e}`, s += `        <label>$${pe.goodsPrice[e]} each</label>`, s += `        <label>${a[e].cargoSpace} cargo</label>`, s += "    </td>", s += "    <td>", s += '        <div class="ui-slider" style="margin-top: 10px">', s += '            <div class="ui-slider-handle" style="width: 3em;height: 1.6em;top: 50%;margin-top: -.8em;text-align: center;line-height: 1.6em;"></div>', s += "        </div>", s += "    </td>", s += `    <td style="padding-top: 5px">${o}</td>`, s += "    <td>", s += '        <button class="btn btn-success btn-sm btn-buy">0</button>', s += "    </td>", s += "</tr>", pe.stock[e] = $(s), t.append(pe.stock[e])
                    } return e
            }
        },
        Xe = e => {
            1 !== u.parent.shipState && 0 !== u.parent.shipState && w.emit("getItems", ((t, a) => {
                if (t) return;
                let o = $("<div/>"),
                    i = '<table class="table">';
                i += '<thead class="thead-inverse">', i += "<tr>", i += "<th> Item Name </th>", i += "<th> Description </th>", i += "<th> Price </th>", i += "<th> Buy Item </th>", i += "</tr>", i += "</thead>", i += "<tbody></tbody>", i += "</table>";
                let s = $('<table class="table"><thead class="thead-inverse"><tr><th> Item Name </th><th> Description </th><th> Price </th><th> Buy Item </th></tr></thead><tbody></tbody></table>'),
                    r = s.find("tbody");
                for (let e in a) {
                    let t = a[e];
                    14 !== t.id && 15 !== t.id || !(u.overall_kills < 10 || u.overall_cargo < 1e4) && u.shipsSank && u.overall_cargo ? 16 === t.id && !0 === u.statsReset && (t.purchasable = !1) : t.purchasable = !1;
                    let o = "<tr>";
                    o += `<td>${t.name}</td>`, o += `<td>${t.Description}</td>`, o += `<td>${t.price}</td>`, o += "<td></td>", o += "</tr>";
                    let i = $(o);
                    r.append(i);
                    let s = $("<button/>", {
                        id: t.id,
                        class: "btn btn-primary btn-sm",
                        role: "button",
                        disabled: u && u.itemId === t.id || !0 !== t.purchasable,
                        html: u && u.itemId === t.id ? "Equipped" : "Buy"
                    }).on("click", (function() {
                        let e = $(this).attr("id");
                        w.emit("purchase", {
                            type: 1,
                            id: e
                        }, (e => {
                            "16" === e && (Ae(), $("#shopping-modal").hide(), u.statsReset = !0)
                        }))
                    }));
                    i.find("td").eq(3).append(s)
                }
                o.append(s), "function" == typeof e && e(o)
            }))
        },
        Qe = e => {
            u && 1 !== u.parent.shipState && 0 !== u.parent.shipState && w.emit("getShips", ((t, a) => {
                if (t) return;
                let o = $("<div/>", {
                        style: "font-size: 15px;text-align: center;"
                    }),
                    i = '<table class="table ship-table">';
                i += '<thead class="thead-inverse">', i += "<tr>", i += "<th> Ship Image </th>", i += "<th> Ship Type </th>", i += "<th> HP</th>", i += "<th> Max Capacity </th>", i += "<th> Max Cargo </th>", i += "<th> Speed </th>", i += "<th> Price </th>", i += "<th> Buy </th>", i += "</tr>", i += "</thead>", i += "<tbody></tbody>", i += "</table>";
                let s = $('<table class="table ship-table"><thead class="thead-inverse"><tr><th> Ship Image </th><th> Ship Type </th><th> HP</th><th> Max Capacity </th><th> Max Cargo </th><th> Speed </th><th> Price </th><th> Buy </th></tr></thead><tbody></tbody></table>'),
                    r = s.find("tbody");
                for (let e in a) {
                    let t = a[e];
                    if (0 === t.id) continue;
                    let o = "<tr>";
                    o += `<td>${t.image}</td>`, o += `<td>${t.name}</td>`, o += `<td>${t.hp}</td>`, o += `<td>${t.maxKrewCapacity}</td>`, o += `<td>${t.cargoSize}</td>`, o += `<td>${t.speed}</td>`, o += `<td>${t.price}</td>`, o += "<td></td>", o += "</tr>";
                    let i = $(o);
                    r.append(i);
                    let s = $("<button/>", {
                        id: t.id,
                        class: "btn btn-primary btn-sm",
                        role: "button",
                        disabled: void 0 !== u.parent && t.id == u.parent.shipclassId && u.parent.captainId === O || !t.purchasable,
                        html: void 0 !== u.parent && t.id == u.parent.shipclassId && u.parent.captainId === O ? "Purchased" : "Buy"
                    }).on("click", (function() {
                        $("#abandon-existing-krew").is(":visible") && $("#abandon-existing-krew").hide();
                        let e = $(this).attr("id");
                        void 0 !== u && (u.position.x = 0, u.position.z = 0), w.emit("purchase", {
                            type: 0,
                            id: e
                        }, (e => {
                            ["04", "05", "06", "07", "08", "09"].includes(e) && ($("#shopping-modal").hide(), $("#completed-quest-table").append($("#other-quest-2").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#other-quest-3").show()), ["010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020"].includes(e) && ($("#shopping-modal").hide(), $("#completed-quest-table").append($("#other-quest-3").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#other-quest-4").show()), ["021", "022", "023", "024"].includes(e) && ($("#shopping-modal").hide(), $("#completed-quest-table").append($("#other-quest-4").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'))
                        })), $("#krew-hud").show(), void 0 !== u && void 0 !== u.parent && 1 !== u.parent.netType && ("undefined" != typeof GameAnalytics && GameAnalytics("addDesignEvent", "Game:Session:PurchasedBoat"), $("#raft-shop-div").hide(), nt.hideSuggestionBox || $("#toggle-shop-modal-button").popover("show"))
                    }));
                    i.find("td").eq(7).append(s)
                }
                o.append(s), "function" == typeof e && e(o)
            }))
        },
        Ze = () => {
            "undefined" != typeof aiptag ? aiptag.cmd.display.push((() => {
                aipDisplayTag.display("krew-io_300x250")
            })) : console.log("Aiptag is not defined, skipped showing static ads")
        },
        et = () => {
            "undefined" != typeof adplayerCentered ? adplayerCentered.startPreRoll() : console.log("Adplayer is not defined, skipped showing preroll ad")
        };
    const tt = () => {
        window.requestAnimationFrame((() => {
            const e = performance.now();
            for (; B.length > 0 && B[0] <= e - 1e3;) B.shift();
            B.push(e), tt()
        }))
    };
    tt(), setInterval((() => {
        document.querySelector("#fps-wrapper > span").innerHTML = `${B.length} FPS`
    }), 1e3);
    let at = () => {
            $("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"), $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"), "Labrador" === T[u.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"), nt.closeAllPagesExcept("#shopping-modal"), ot(), Je()
        },
        ot = (setInterval((() => {
            (() => {
                if (++G, $("#seconds").html(ve(G % 60)), $("#minutes").html(ve(parseInt(G % 3600 / 60))), $("#hours").html(ve(parseInt(G / 3600))), u && u.parent) {
                    if (-1 === u.parent.shipState || 3 === u.parent.shipState) return $("#docking-modal-button").removeClass("btn btn-primary disabled btn-lg").addClass("btn btn-primary enabled btn-lg"), $(".port-name").text(T[u.parent.anchorIslandId].name), $("#docking-modal-button").find("span").text("Countdown..."), void $("#cancel-exit-button").find("span").text("Sail (c)");
                    5 === u.parent.netType && ($(".port-name").text(u.parent.name), $("#docking-modal").is(":visible") && ($("#docking-modal").hide(), at())), $("#docking-modal").hasClass("initial") && $("#docking-modal").removeClass("initial").find("#you-are-docked-message").remove(), 1 !== u.parent.shipState && (N = 8), 1 === u.parent.shipState && (8 === N && w.emit("dock"), $("#cancel-exit-button").find("span").text("Cancel (c)"), 0 !== N && N > 0 ? $("#docking-modal-button").find("span").text(`Docking in ${N} seconds`) : ($("#docking-modal-button").find("span").text("Dock (z)"), $("#docking-modal-button").removeClass("btn btn-primary disabled btn-lg").addClass("btn btn-primary enabled btn-lg")), N--), 4 === u.parent.shipState && ($("#docking-modal").hide(), $("#departure-modal").is(":visible") || $("#departure-modal").show(0), $("#cancel-departure-button").find("span").text((u && u.isCaptain ? "Departing in " : "Krew departing in ") + T[u.id].parent.departureTime + " seconds")), (!u.isCaptain && 4 !== u.parent.shipState || u.isCaptain && 0 === u.parent.shipState) && $("#departure-modal").is(":visible") && $("#departure-modal").hide()
                }
            })()
        }), 1e3), () => ($("#shopping-item-list").html(""), $("#buy-items").hasClass("active") ? ($("#abandon-existing-krew").is(":visible") && $("#abandon-existing-krew").hide(), void Xe((e => $("#shopping-item-list").html(e)))) : $("#buy-ships").hasClass("active") ? (void 0 !== u && void 0 !== u.parent && u.parent.captainId !== u.id && 1 === u.parent.netType && $("#abandon-existing-krew").show(), void Qe((e => $("#shopping-item-list").html(e)))) : void($("#buy-goods").hasClass("active") && ($("#abandon-existing-krew").is(":visible") && $("#abandon-existing-krew").hide(), Ye.getList())))),
        it = () => {
            u && T[u.id] && T[u.id].parent && (Rt.playAudioFile(!1, !1, 1, "sail"), $("#docking-modal").hide(), w.emit("departure", 0))
        },
        st = e => {
            "show" === e ? $("#loading-wheel").show() : $("#loading-wheel").hide()
        },
        rt = () => {
            let e = $("#spawn-select").val();
            return "sea" === e || "krew" === e ? (Rt.musicPlaying = "ocean-music", Rt.playAudioFile(!0, !1, 1, "ocean-music")) : (Rt.musicPlaying = "island-music", Rt.playAudioFile(!0, !1, 1, "island-music")), e
        },
        nt = {
            hideSuggestionBox: !1,
            serverList: {},
            lastGold: 0,
            markerMapCount: performance.now(),
            allPagesId: ["#ship-status-modal", "#shopping-modal", "#krew-list-modal", "#bank-modal", "#quests-modal", "#help-modal"],
            captainUiConfiguration: {
                editingName: !1,
                active: !1
            },
            setListeners: () => {
                $("#global-chat-alert").hide(), nt.setQualitySettings(), $("#music-control").on("change", (() => Rt.updateMusicVolume())), $("#splash-modal").modal({
                    backdrop: "static",
                    keyboard: !1
                }), $("#splash-modal").modal("show"), $("#show-more").on("click", (() => {
                    $("#show-more").text().indexOf("Show more") > -1 ? ($(".top50").show(), $("#show-more").html('<i class="icofont icofont-medal"></i> Show less')) : ($(".top50").hide(), $("#show-more").html('<i class="icofont icofont-medal"></i> Show more'))
                })), ke().sid && ke().bid && ($("#invite-is-used").show(), $("#server-select").hide(), $("#spawn-select").hide()), $("#play-btn").on("click", (() => {
                    "undefined" != typeof GameAnalytics && GameAnalytics("addDesignEvent", "Game:Session:ClickedPlayButton"), J && (Lt($("#server-select").val()), $("#chat-message").on("keyup", (() => {
                        let t = e.Admins.includes(u.name) || e.Mods.includes(u.name) || e.Helpers.includes(u.name) || e.Designers.includes(u.name);
                        t && $("#chat-message").prop("maxlength", 1e3), $("#chat-message").val().trim().length > (t ? 1e3 : 150) && $("#chat-message").val($("#chat-message").val().slice(0, t ? 1e3 : 150))
                    })), $("#chat-message").on("keypress", (e => {
                        13 === e.keyCode && (w.emit("chat message", {
                            message: $("#chat-message").val(),
                            recipient: Z ? "local" : Q ? "clan" : X ? "staff" : "global"
                        }), $("#chat-message").val("").focus())
                    })), $("#chat-global").on("click", (() => {
                        He()
                    })), $("#chat-local").on("click", (() => {
                        Le()
                    })), $("#chat-clan").on("click", (() => {
                        De()
                    })), $("#chat-staff").on("click", (() => {
                        Fe()
                    })), $("#hide-chat").on("click", (() => {
                        $("#show-chat").show(), $("#chat-div").hide()
                    })), $("#show-chat").on("click", (() => {
                        $("#show-chat").hide(), $("#chat-div").show()
                    })), $("#play-again-button").on("click", (() => {
                        J && (et(), G = 0, w.emit("respawn"), u.itemId = void 0, u.state = 2, $("#toggle-shop-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button"), $("#toggle-krew-list-modal-button").removeClass("btn btn-md enabled toggle-krew-list-modal-button").addClass("btn btn-md disabled toggle-krew-list-modal-button"), $("#toggle-bank-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button").attr("data-tooltip", "Bank is available at Labrador"), $("#game-over-modal").hide())
                    })), $("#quality-list").on("change", (() => fe())), $("#crew_count, #ship_health, #food").slider(), $("#crew_count").on("slide", (e => {
                        $("#crew_count_val").text(e.value)
                    })), $("#ship_health").on("slide", (e => {
                        $("#ship_health_val").text(e.value)
                    })), $("#docking-modal-button").on("click", (() => {
                        $("#docking-modal-button").hasClass("enabled") && (u && u.parent && (Rt.playAudioFile(!1, !1, 1, "dock"), w.emit("anchor"), $(".btn-shopping-modal").eq(2).trigger("click"), "Labrador" === T[u.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"), 1 !== u.parent.netType || $("#exit-island-button").is(":visible") || $("#exit-island-button").show()), r.unLockMouseLook(), $("#docking-modal").hide(), $("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"), $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"), ot(), $("#recruiting-div").fadeIn("slow"))
                    })), $("#game-over-modal").modal({
                        show: !1,
                        backdrop: "static",
                        keyboard: !1
                    }), $("#toggle-invite-link-button").on("click", (() => {
                        $("#invite-div").is(":visible") ? $("#invite-div").hide() : ($("#invite-link").val(nt.getInviteLink()), $("#invite-div").show())
                    })), $("#exit-island-button").on("click", (() => it())), $("#toggle-help-button").on("click", (() => {
                        $("#help-modal").is(":visible") ? $("#help-modal").hide() : (nt.closeAllPagesExcept("#help-modal"), $("#help-modal").show())
                    })), $("#toggle-quest-button").on("click", (() => {
                        $("#quests-modal").is(":visible") ? $("#quests-modal").hide() : (w.emit("get-stats", (e => {
                            let t = JSON.parse(e);
                            $(".pirate-progress").text(t.shipsSank), $(".crew-pirate-progress").text(t.overall_kills), t.shipsSank >= 1 && ($("#completed-quest-table").append($("#pirate-quest-1").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#pirate-quest-2").show(), $("#crew-pirate-quest-1").show()), t.shipsSank >= 5 && ($("#completed-quest-table").append($("#pirate-quest-2").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#pirate-quest-3").show()), t.shipsSank >= 10 && ($("#completed-quest-table").append($("#pirate-quest-3").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#pirate-quest-4").show()), t.shipsSank >= 20 && ($("#completed-quest-table").append($("#pirate-quest-4").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')), t.overall_kills >= 10 && ($("#completed-quest-table").append($("#crew-pirate-quest-1").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#crew-pirate-quest-2").show()), t.overall_kills >= 20 && ($("#completed-quest-table").append($("#crew-pirate-quest-2").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#crew-pirate-quest-3").show()), t.overall_kills >= 50 && ($("#completed-quest-table").append($("#crew-pirate-quest-3").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')), $(".trade-progress").text(t.overall_cargo), $(".crew-trade-progress").text(t.crew_overall_cargo), t.overall_cargo >= 1e3 && ($("#completed-quest-table").append($("#trade-quest-1").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#trade-quest-2").show(), $("#crew-trade-quest-1").show()), t.overall_cargo >= 6e3 && ($("#completed-quest-table").append($("#trade-quest-2").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#trade-quest-3").show()), t.overall_cargo >= 15e3 && ($("#completed-quest-table").append($("#trade-quest-3").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#trade-quest-4").show()), t.overall_cargo >= 3e4 && ($("#completed-quest-table").append($("#trade-quest-4").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')), t.crew_overall_cargo >= 12e3 && ($("#completed-quest-table").append($("#crew-trade-quest-1").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#crew-trade-quest-2").show()), t.crew_overall_cargo >= 5e4 && ($("#completed-quest-table").append($("#crew-trade-quest-2").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#crew-trade-quest-3").show()), t.crew_overall_cargo >= 15e4 && ($("#completed-quest-table").append($("#crew-trade-quest-3").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>')), $("#other-progress-1").text(u.jump_count), u.jump_count >= 50 && ($("#completed-quest-table").append($("#other-quest-1").last()), $("#completed-quest-table .quest-progress").html('<i class="icofont icofont-check-circled"></i>'), $("#other-quest-2").show())
                        })), nt.closeAllPagesExcept("#quests-modal"), $("#quests-modal").show())
                    })), $("#close-quests-button").on("click", (() => {
                        $("#quests-modal").css("display", "none")
                    })), $("#close-help-button").on("click", (() => {
                        $("#help-modal").css("display", "none")
                    })), $("#cancel-exit-button").on("click", (() => {
                        "Cancel (c)" === $("#cancel-exit-button").find("span").text() && (w.emit("exitIsland"), $("#docking-modal-button").find("span").text("Countdown..."))
                    })), $("#abandon-ship-button").on("click", (() => {
                        if (!(u.parent.hp <= 0)) {
                            if (u.goods && (3 === u.parent.shipState || 4 === u.parent.shipState))
                                for (let e in u.goods) u.goods[e] > 0 && w.emit("buy-goods", {
                                    quantity: u.goods[e],
                                    action: "sell",
                                    good: e
                                }, ((e, t) => {
                                    e || e || (u.gold = t.gold, u.goods = t.goods)
                                }));
                            w.emit("abandonShip"), $("#abandon-ship-button").hide(), void 0 !== u.parent && (3 === u.parent.shipState || -1 === u.parent.shipState || 4 === u.parent.shipState ? ($("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"), $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"), "Labrador" === T[u.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"), ot()) : 1 === u.parent.shipState && $("#docking-modal").show())
                        }
                    })), $("#lock-krew-button").on("click", (() => {
                        $("#lock-krew-button").is(":checked") ? ($("#lock-krew-text").removeClass("lock-text-info").addClass("lock-text-error").text("Unlock krew..."), w.emit("lock-krew", !0)) : ($("#lock-krew-text").removeClass("lock-text-error").addClass("lock-text-info").text("Lock krew..."), w.emit("lock-krew", !1))
                    })), $("#fp-mode-button").on("click", (() => {
                        $("#fp-mode-button").is(":checked") ? $("#fp-mode-text").removeClass("lock-text-info").addClass("lock-text-error").text("FP Camera (Enabled)") : $("#fp-mode-text").removeClass("lock-text-error").addClass("lock-text-info").text("FP Camera (Disabled)")
                    })), $("#view-sails-button").on("click", (() => {
                        $("#view-sails-button").is(":checked") ? $("#view-sails-text").removeClass("lock-text-info").addClass("lock-text-error").text("View Sails (Enabled)") : $("#view-sails-text").removeClass("lock-text-error").addClass("lock-text-info").text("View Sails (Disabled)"), Y = $("#view-sails-button").is(":checked")
                    })), $(".toggle-krew-list-modal-button").on("click", (() => {
                        $("#toggle-krew-list-modal-button").hasClass("enabled") && ($("#krew-list-modal").is(":visible") ? $("#krew-list-modal").hide() : ($("#toggle-shop-modal-button").popover("hide"), $("#krew-list-modal").show(), nt.closeAllPagesExcept("#krew-list-modal")))
                    })), $("#crew-name-edit-button").on("click", (() => {
                        $("#crew-name-edit-button").addClass("hidden"), nt.captainUiConfiguration.active && ($("#crew-name").addClass("hidden"), nt.captainUiConfiguration.editingName = !0, $("#crew-name-edit-input").val($("#crew-name").html()).removeClass("hidden").focus())
                    })), $("#krew-name-form").on("submit", (e => {
                        if (nt.captainUiConfiguration.editingName = !1, $("#crew-name").removeClass("hidden"), $("#crew-name-edit-input").addClass("hidden"), nt.captainUiConfiguration.active) {
                            $("#crew-name-edit-button").removeClass("hidden");
                            let e = $("#crew-name-edit-input").val().trim().slice(0, 20);
                            e.length > 0 && !e.includes("⚔") && (u.parent.setName(e), $("#crew-name").text(u.parent.crewName), w.emit("updateKrewName", u.parent.crewName))
                        }
                        $("#crew-name-edit-input").val(""), e.preventDefault()
                    })), $(".toggle-bank-modal-button").on("click", (() => {
                        $("#toggle-bank-modal-button").hasClass("enabled") && ($("#bank-modal").is(":visible") ? $("#bank-modal").hide() : (nt.closeAllPagesExcept("#bank-modal"), $("#bank-modal").show(), $("#successTakeDepoMess").hide(), $("#successMakeDepoMess").hide(), $("#errorMakeDepoMess").hide(), $("#errorTakeDepoMess").hide(), w.emit("bank")))
                    })), $("#toggle-map-button").on("click", (() => {
                        $("#minimap-container").is(":visible") ? $("#minimap-container").hide() : $("#minimap-container").show()
                    })), $(".toggle-ship-status-button").on("click", (() => {
                        $("#ship-status-modal").is(":visible") ? $("#ship-status-modal").hide() : (nt.closeAllPagesExcept("#ship-status-button"), $("#ship-status").addClass("active"), $("#clan-management").removeClass("active"), $("#game-settings").removeClass("active"), $("#ship-status-container").is(":visible") || ($("#ship-status-container").show(), $("#clan-management-container").hide(), $("#notLoggedIn-container").hide(), $("#game-settings-container").hide()), $("#ship-status-modal").show(), !0 !== u.isCaptain ? $("#lock-krew-label").hide() : ($("#lock-krew-label").show(), u.parent && !0 !== u.parent.isLocked ? ($("#lock-krew-button").prop("checked", !1), $("#lock-krew-text").removeClass("lock-text-error").addClass("lock-text-info").text("Lock krew...")) : ($("#lock-krew-button").prop("checked", !0), $("#lock-krew-text").removeClass("lock-text-info").addClass("lock-text-error").text("Unlock krew..."))))
                    })), $("#ship-status").on("click", (() => {
                        $("#ship-status").addClass("active"), $("#clan-management").removeClass("active"), $("#game-settings").removeClass("active"), $("#ship-status-container").is(":visible") || ($("#ship-status-container").show(), $("#clan-management-container").hide(), $("#notLoggedIn-container").hide(), $("#game-settings-container").hide())
                    })), $("#clan-management").on("click", (() => {
                        $("#ship-status").removeClass("active"), $("#clan-management").addClass("active"), $("#game-settings").removeClass("active"), !0 === u.isLoggedIn ? (Ue.setClanData(), $("#clan-management-container").is(":visible") || ($("#ship-status-container").hide(), $("#clan-management-container").show(), $("#notLoggedIn-container").hide(), $("#game-settings-container").hide(), Ue.setClanData("force"))) : ($("#ship-status-container").hide(), $("#clan-management-container").hide(), $("#notLoggedIn-container").show(), $("#game-settings-container").hide())
                    })), $("#game-settings").on("click", (() => {
                        $("#ship-status").removeClass("active"), $("#clan-management").removeClass("active"), $("#game-settings").addClass("active"), $("#game-settings-container").is(":visible") || ($("#ship-status-container").hide(), $("#clan-management-container").hide(), $("#notLoggedIn-container").hide(), $("#game-settings-container").show())
                    })), $("#leave-clan-button").on("click", (() => {
                        w.emit("clan", "leave", (e => {
                            !0 === e && Ue.setClanData("force")
                        })), u.clan = "", Ue.setClanData()
                    })), $("#request-clan-button").on("click", (() => {
                        $("#clan-table").hide(), $("#clan-request-table").show(), $("#view-clan-button").show()
                    })), $("#view-clan-button").on("click", (() => {
                        $("#clan-table").show(), $("#clan-request-table").hide(), $("#view-clan-button").hide()
                    })), $("#clan-request").on("click", (() => {
                        Ue.hideAllClanErrors()
                    })), $("#join-clan-button").on("click", (() => {
                        Ue.hideAllClanErrors();
                        let e = $("#clan-request").val();
                        !0 !== $e(e) ? $("#errorInput").show() : e.length < 1 || e.length > 4 ? $("#errorLength").show() : u.clanRequest && "" !== u.clanRequest || w.emit("clan", {
                            action: "join",
                            id: e
                        }, (t => {
                            !0 === t ? (u.clanRequest = e, Ue.setClanData("force")) : 404 === t ? $("#error404").show() : $("#errorUndefined").show()
                        }))
                    })), $("#create-clan-button").on("click", (() => {
                        Ue.hideAllClanErrors();
                        let e = $("#clan-request").val();
                        !0 !== $e(e) ? $("#errorInput").show() : e.length < 1 || e.length > 4 ? $("#errorLength").show() : w.emit("clan", {
                            action: "create",
                            id: e
                        }, (t => {
                            !0 === t ? (u.clan = e, u.clanLeader = !0, Ue.setClanData("force")) : 409 === t ? $("#errorExists").show() : 403 === t ? $("#errorUnauthorized").show() : $("#errorUndefined").show()
                        }))
                    })), $("#clan-table").on("click", (e => {
                        let t = e.target.getAttribute("data-event"),
                            a = e.target.getAttribute("data-id");
                        "promote-clan" === t ? (w.emit("clan", {
                            action: "promote",
                            id: a
                        }, (e => {
                            !0 === e && Ue.setClanData("force")
                        })), Ue.setClanData()) : "kick-clan" === t && w.emit("clan", {
                            action: "kick",
                            id: a
                        }, (e => {
                            !0 === e && Ue.setClanData("force")
                        }))
                    })), $("#clan-request-table").on("click", (e => {
                        let t = e.target.getAttribute("data-event"),
                            a = e.target.getAttribute("data-id");
                        "accept-request" === t ? w.emit("clan", {
                            action: "accept",
                            id: a
                        }, (e => {
                            !0 === e && Ue.setClanData("force")
                        })) : "decline-request" === t && w.emit("clan", {
                            action: "decline",
                            id: a
                        }, (e => {
                            !0 === e && Ue.setClanData("force")
                        }))
                    })), $("#player-request-table").on("click", (e => {
                        "cancel-request" === e.target.getAttribute("data-event") && u.clanRequest && "" !== u.clanRequest && w.emit("clan", {
                            action: "cancel-request",
                            id: u.clanRequest
                        }, (e => {
                            !0 === e && (u.clanRequest = "", Ue.setClanData("force"))
                        }))
                    })), $("#minimap").on("click", (t => {
                        if (nt.markerMapCount < performance.now() - 5e3) {
                            nt.markerMapCount = performance.now();
                            let a = ((void 0 === t.offsetX ? t.layerX : t.offsetX) - 10) / 180 * e.worldsize,
                                o = ((void 0 === t.offsetY ? t.layerY : t.offsetY) - 10) / 180 * e.worldsize;
                            w.emit("addMarker", {
                                x: a,
                                y: o
                            })
                        }
                    })), $("#krew-list").on("click", (e => {
                        let t = e.target.getAttribute("data-event");
                        if ("kick" === t) {
                            let t = e.target.getAttribute("data-id");
                            "string" == typeof t && t.length > 0 && (w.emit("bootMember", t), $(e.target).closest(".player-list-item").remove(), $("#buy-goods").hasClass("active") && Ye.getList())
                        } else if ("transfer" === t) {
                            let t = e.target.getAttribute("data-id");
                            "string" == typeof t && t.length > 0 && (w.emit("transferShip", t), $("#buy-goods").hasClass("active") && Ye.getList())
                        }
                    })), $("#player-leaderboard").hide(), $("#fov-control").on("change", (() => _ = document.getElementById("fov-control").value / 10)), $(".toggle-shop-modal-button").on("click", (() => {
                        $("#toggle-shop-modal-button").hasClass("enabled") && ($("#shopping-modal").is(":visible") ? $("#shopping-modal").hide() : ($("#toggle-shop-modal-button").popover("hide"), $("#shopping-modal").show())), at()
                    })), $("#buy-items").on("click", (() => {
                        $(".btn-shopping-modal").removeClass("active"), $("#buy-items").addClass("active"), ot()
                    })), $("#buy-ships").on("click", (() => {
                        $(".btn-shopping-modal").removeClass("active"), $("#buy-ships").addClass("active"), ot()
                    })), $("#buy-goods").on("click", (() => {
                        $(".btn-shopping-modal").removeClass("active"), $("#buy-goods").addClass("active"), ot()
                    })), $("#make-deposit").on("keypress", (e => {
                        13 === e.keyCode && Ke()
                    })), $("#take-deposit").on("keypress", (e => {
                        13 === e.keyCode && Ge()
                    })), $("#close-bank-button").on("click", (() => {
                        $("#bank-modal").hide()
                    })), $("#btn-make-deposit").on("click", (() => {
                        Ke()
                    })), $("#btn-take-deposit").on("click", (() => {
                        Ge()
                    })), et(), st("show"), Rt.playAudioFile(!1, !1, 1, "wheelspin"), Rt.playAudioFile(!0, !1, .7, "ocean-ambience"))
                })).text("Loading...").attr("disabled", !0)
            },
            getInviteLink: () => `${window.location.protocol}//${window.location.hostname}${"localhost"===window.location.hostname?":8080/?sid=":"/?sid="}${$("#server-select").val()}&bid=${u.parent.id}`,
            checkGoldDelta: e => {
                let t = 0,
                    a = e - nt.lastGold;
                if (nt.lastGold = e, a > 0) {
                    let o;
                    u.notifiscationHeap[Math.random().toString(36).substring(6, 10)] = {
                        text: `+ ${a} Gold!`,
                        type: 1,
                        isNew: !0
                    }, $("#gold").hasClass("glow-gold-plus") || 0 !== t || ($("#gold").addClass("glow-gold-plus"), t = 1, setTimeout((() => {
                        $("#gold").removeClass("glow-gold-plus"), t = 0
                    }), 3500)), o = e > 99999 && e < 999999 ? `${Math.floor(e/1e3)} K` : e > 999999 ? Math.floor(e / 1e3) / 1e3 + " M" : e, $(".my-gold").text(o)
                } else if (a < 0) {
                    let a;
                    $("#gold").hasClass("glow-gold-minus") || 0 !== t || ($("#gold").addClass("glow-gold-minus"), t = 1, setTimeout((() => {
                        $("#gold").removeClass("glow-gold-minus"), t = 0
                    }), 3500)), a = e > 99999 && e < 999999 ? `${Math.floor(e/1e3)} K` : e > 999999 ? Math.floor(e / 1e3) / 1e3 + " M" : e, $(".my-gold").text(a)
                }
            },
            closeAllPages: () => {
                for (let e of nt.allPagesId) $(e).hide()
            },
            closeAllPagesExcept: e => {
                for (let t of nt.allPagesId) e !== t && $(t).hide()
            },
            setQualitySettings: () => {
                let e;
                $("#quality-list").html(""), e = $("<option/>", {
                    html: "High Quality (slow)",
                    value: 3
                }), $("#quality-list").append(e), e = $("<option/>", {
                    html: "Medium Quality (fast)",
                    value: 2
                }), $("#quality-list").append(e), e = $("<option/>", {
                    html: "Low Quality (faster)",
                    value: 1
                }), $("#quality-list").append(e), $("#account-quality-list").html(""), e = $("<option/>", {
                    html: "High Quality (slow)",
                    value: 3
                }), $("#account-quality-list").append(e), e = $("<option/>", {
                    html: "Medium Quality (fast)",
                    value: 2
                }), $("#account-quality-list").append(e), e = $("<option/>", {
                    html: "Low Quality (faster)",
                    value: 1
                }), $("#account-quality-list").append(e)
            },
            updateCaptainUi: () => {
                nt.captainUiConfiguration.active && !nt.captainUiConfiguration.editingName ? $("#crew-name-edit-button").removeClass("hidden") : $("#crew-name-edit-button").addClass("hidden")
            },
            textFieldFocused: () => null !== document.activeElement && ["input", "select", "textarea"].includes(document.activeElement.tagName.toLowerCase())
        },
        lt = !1;
    const dt = e => {
            if (!nt.textFieldFocused()) switch (e.key) {
                case "w":
                case "ArrowUp":
                    oe = !0;
                    break;
                case "a":
                case "ArrowLeft":
                    te = !0;
                    break;
                case "s":
                case "ArrowDown":
                    ie = !0;
                    break;
                case "d":
                case "ArrowRight":
                    ae = !0;
                    break;
                case " ":
                    se = !0;
                    break;
                case "1":
                    u && u.geometry && 0 !== u.activeWeapon && (w.emit("changeWeapon", 0), u.isFishing = !1, $("#cannon-item-div").css("border", "5px solid #f0ad4e"), $("#rod-item-div").css("border", "none"), $("#spyglass-item-div").css("border", "none"));
                    break;
                case "2":
                    u && u.geometry && 1 !== u.activeWeapon && (w.emit("changeWeapon", 1), u.isFishing = !1, $("#cannon-item-div").css("border", "none"), $("#rod-item-div").css("border", "5px solid #f0ad4e"), $("#spyglass-item-div").css("border", "none"));
                    break;
                case "3":
                    u && u.geometry && 2 !== u.activeWeapon && (w.emit("changeWeapon", 2), u.isFishing = !1, $("#cannon-item-div").css("border", "none"), $("#rod-item-div").css("border", "none"), $("#spyglass-item-div").css("border", "5px solid #f0ad4e"), lt || (Oe("Use the scroll wheel to zoom in and out with the spyglass", 4, 6e3), lt = !0));
                    break;
                case "Shift":
                    $("#player-leaderboard").show();
                    break;
                case "c":
                    u && u.parent && (1 !== u.parent.shipState && -1 !== u.parent.shipState || "Cancel (c)" !== $("#cancel-exit-button").find("span").text() ? 3 === u.parent.shipState && it() : (w.emit("exitIsland"), $("#docking-modal-button").find("span").text("Countdown...")));
                    break;
                case "h":
                    $("#help-modal").is(":visible") ? $("#help-modal").hide() : $("#help-modal").show();
                    break;
                case "m":
                    $("#minimap-container").is(":visible") ? $("#minimap-container").hide() : $("#minimap-container").show();
                    break;
                case "q":
                    $("#quests-modal").is(":visible") ? $("#quests-modal").hide() : document.getElementById("toggle-quest-button").click();
                    break;
                case "u":
                    $("#game-ui").is(":hidden") ? $("#game-ui").show() : ($("#game-ui").hide(), Oe('Press "U" again to show the game UI', 4, 4e3));
                    break;
                case "z":
                    u && u.parent && (1 === u.parent.shipState || -1 === u.parent.shipState) && $("#docking-modal-button").hasClass("enabled") && (Rt.playAudioFile(!1, !1, 1, "dock"), w.emit("anchor"), $("#docking-modal").hide(), "Labrador" === T[u.parent.anchorIslandId].name && $("#toggle-bank-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold"), $("#toggle-shop-modal-button").removeClass("btn btn-md disabled toggle-shop-modal-button").addClass("btn btn-md enabled toggle-shop-modal-button"), $("#toggle-krew-list-modal-button").removeClass("btn btn-md disabled toggle-krew-list-modal-button").addClass("btn btn-md enabled toggle-krew-list-modal-button"), $("#exit-island-button").is(":visible") || $("#exit-island-button").show(), $("#recruiting-div").fadeIn("slow"), r.unLockMouseLook());
                    break;
                case "Tab":
                    e.preventDefault(), $("#li-staff-chat").is(":visible") && $("#li-clan-chat").is(":visible") ? X ? De() : Q ? Le() : Z ? He() : ee && Fe() : $("#li-staff-chat").is(":visible") ? X ? Le() : Z ? He() : ee && Fe() : $("#li-clan-chat").is(":visible") ? Q ? Le() : Z ? He() : ee && De() : Z ? He() : ee && Le();
                    break;
                case ",":
                    $("#show-chat").is(":visible") ? ($("#show-chat").hide(), $("#chat-div").show()) : ($("#show-chat").show(), $("#chat-div").hide());
                    break;
                case "5":
                case "6":
                case "7": {
                    const t = Be.keys[e.keyCode];
                    Be.clearStore().setStore((e => {
                        e.allocatedPoints[t] = 1, Be.allocatePoints((() => {
                            Ae()
                        }))
                    }));
                    break
                }
            }
        },
        ct = e => {
            switch (e.key) {
                case "Escape":
                    u && (u.target = void 0);
                    break;
                case "Enter":
                    $("#chat-message").is(":focus") ? $("#chat-message").blur() : $("#chat-message").focus();
                    break;
                default:
                    if (!nt.textFieldFocused()) switch (e.key) {
                        case "w":
                        case "ArrowUp":
                            oe = !1;
                            break;
                        case "a":
                        case "ArrowLeft":
                            te = !1;
                            break;
                        case "s":
                        case "ArrowDown":
                            ie = !1;
                            break;
                        case "d":
                        case "ArrowRight":
                            ae = !1;
                            break;
                        case " ":
                            se = !1, u.jump_count++, 50 === u.jump_count && Oe("Jumping Hero! New quest available", 3);
                            break;
                        case "Shift":
                            $("#player-leaderboard").hide();
                            break;
                        case "Tab":
                            e.preventDefault()
                    }
            }
        };
    class pt {
        constructor() {
            this.locked = !1, this.lmb = !1, this.rmb = !1, this.cameraX = 0, this.cameraY = Math.PI, this.mouse = new THREE.Vector2, this.isMouseLookLocked = !1, this.lastX = 0, this.lastY = 0, this.zoom = 0, mt ? document.addEventListener("mousemove", this.mouseMoveUnlocked, !1) : (this.locked = !0, document.addEventListener("mousemove", this.mouseMoveLocked, !1)), this.mouseMoveUnlocked = e => {
                this.mouse.x = e.clientX / window.innerWidth * 2 - 1, this.mouse.y = -e.clientY / window.innerHeight * 2 + 1, mt || (this.lastX = e.x, this.lastY = e.y)
            }, this.mouseMoveLocked = e => {
                e.preventDefault();
                let t = e.movementX || e.mozMovementX || e.webkitMovementX || 0,
                    a = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
                mt && (this.cameraX -= .0016 * a, this.cameraY -= .0023 * t), mt || (t = e.x - this.lastX, a = e.y - this.lastY, this.cameraX -= .0082 * a, this.cameraY -= .0064 * t, this.lastX = e.x, this.lastY = e.y), this.cameraX = Math.max(Math.PI / 2 * -1, Math.min(Math.PI / 2, this.cameraX))
            }, this.onMouseDown = e => {
                switch (e.button) {
                    case 0:
                        r.locked && (this.lmb = !0), u && e.target === y.domElement && this.lockMouseLook();
                        break;
                    case 2:
                        r.locked && (this.rmb = !0), u && e.target === y.domElement && this.lockMouseLook()
                }
            }, this.onMouseUp = e => {
                switch (e.button) {
                    case 0:
                        this.lmb = !1;
                        break;
                    case 2:
                        this.rmb = !1
                }
                return !1
            }, this.mouseWheelDown = e => {
                e.target !== y.domElement && e.target !== document.body || e.preventDefault()
            }, this.mouseWheelEvent = e => {
                u && u.geometry && 2 === u.activeWeapon && (e.target === y.domElement || e.target === document.body) && (this.zoom -= e.deltaY / 200, this.zoom > 10 && (this.zoom = 10), this.zoom < 0 && (this.zoom = 0))
            }, document.addEventListener("mousedown", this.onMouseDown), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("mouseweheel", this.mouseWheelDown), document.addEventListener("DOMouseScroll", this.mouseWheelDown), document.addEventListener("wheel", this.mouseWheelEvent), this.lockMouseLook = () => {
                if (mt) {
                    let e = document.body;
                    e.requestPointerLock = e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock, e.requestPointerLock()
                }
                this.isMouseLookLocked = !0
            }, this.unLockMouseLook = () => {
                mt && (document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock, document.exitPointerLock()), this.isMouseLookLocked = !1
            }
        }
    }
    window.oncontextmenu = () => !1;
    let mt = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
    if (mt) {
        let e = document.body,
            t = t => {
                document.pointerLockElement === e ? (r.locked = !0, document.addEventListener("mousemove", r.mouseMoveLocked, !1), document.removeEventListener("mousemove", r.mouseMoveUnlocked, !1)) : (r.locked = !1, document.addEventListener("mousemove", r.mouseMoveUnlocked, !1), document.removeEventListener("mousemove", r.mouseMoveLocked, !1))
            };
        document.addEventListener("pointerlockchange", t, !1)
    } else console.error("Your browser does not seem to support the pointer lock API.");
    let ht = e => {
        T.hasOwnProperty(e.id) && (e.onDestroy(), delete T[e.id])
    };
    class ut {
        constructor() {
            this.netType = -1, this.sendSnap = !0, this.sendDelta = !0, this.sendCreationSnapOnDelta = !0, this.last = {}, this.lastType = {}, this.muted = [], this.parent = void 0, this.children = {}, this.isNew = !0, this.collisionRadius = 1, this.position = new THREE.Vector3(0, 0, 0), this.velocity = new THREE.Vector3(0, 0, 0), this.size = new THREE.Vector3(1, 1, 1), this.rotation = 0, this.modelscale = new THREE.Vector3(1, 1, 1), this.modeloffset = new THREE.Vector3(0, 0, 0), this.modelrotation = new THREE.Vector3(0, 0, 0), this.baseGeometry = void 0, this.baseMaterial = void 0
        }
        addChildren(e) {
            this.children[e.id] = e, e.parent = this
        }
        hasChild(e) {
            for (let t in this.children)
                if (this.children[t].id === e) return !0;
            return !1
        }
        worldPos() {
            let e = new THREE.Vector3;
            return e.copy(this.position), void 0 !== this.parent && (e.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.parent.rotation), e.add(this.parent.worldPos())), e
        }
        toLocal(e) {
            let t = new THREE.Vector3;
            return t.copy(e), t.sub(this.position), t.applyAxisAngle(new THREE.Vector3(0, 1, 0), -this.rotation), t
        }
        createBody() {
            var e;
            (e = this).geometry = new THREE.Object3D, f.add(e.geometry), e.geometry.rotation.order = "YXZ", e.baseGeometry && (e.body = new THREE.Mesh(e.baseGeometry, e.baseMaterial), e.body.scale.set(e.modelscale.x, e.modelscale.y, e.modelscale.z), e.body.position.set(e.modeloffset.x, e.modeloffset.y, e.modeloffset.z), e.body.rotation.set(e.modelrotation.x, e.modelrotation.y, e.modelrotation.z), e.geometry.add(e.body), e.geometry.position.x = e.position.x, e.geometry.position.y = e.position.y, e.geometry.position.z = e.position.z), e.baseModel && (e.body = e.baseModel.clone(), e.body.scale.set(e.modelscale.x, e.modelscale.y, e.modelscale.z), e.body.position.set(e.modeloffset.x, e.modeloffset.y, e.modeloffset.z), e.body.rotation.set(e.modelrotation.x, e.modelrotation.y, e.modelrotation.z), e.geometry.add(e.body), e.geometry.position.x = e.position.x, e.geometry.position.y = e.position.y, e.geometry.position.z = e.position.z), e.isPlayer && (o.parent && o.parent.remove(o), o.position.set(0, 1, 5), o.rotation.z = 0, o.rotation.y = 0, o.rotation.x = -.4, e.geometry.add(o), e.geometry.add(e.crosshair)), 0 === e.netType && e.setPlayerBody(e.playerModel, e.hatModel), e.clientlogic(0)
        }
        getDelta() {
            return (e => {
                if (!e.sendDelta && !e.sendCreationSnapOnDelta) return;
                if (e.sendCreationSnapOnDelta) return void(e.sendCreationSnapOnDelta = !1);
                let t = {
                    p: e.deltaCompare("p", e.parent ? e.parent.id : void 0),
                    n: e.deltaCompare("n", e.netType),
                    x: e.deltaCompare("x", Number(e.position.x.toFixed(2))),
                    y: e.deltaCompare("y", Number(e.position.y.toFixed(2))),
                    z: e.deltaCompare("z", Number(e.position.z.toFixed(2))),
                    r: e.deltaCompare("r", Number(e.rotation.toFixed(2))),
                    t: e.getTypeDelta()
                };
                return Ie(t) && (t = void 0), t
            })(this)
        }
        deltaCompare(e, t) {
            return ((e, t, a) => {
                if (a.last[e] !== t && a.muted.indexOf(e) < 0) return a.last[e] = t, t
            })(e, t, this)
        }
        deltaTypeCompare(e, t) {
            return ((e, t, a) => {
                if (a.lastType[e] !== t) return a.lastType[e] = t, t
            })(e, t, this)
        }
        clientlogic(e) {
            var t;
            (t = this).geometry.position.set(t.position.x, t.position.y, t.position.z), t.geometry.rotation.y = t.rotation
        }
        parseSnap(t, a) {
            ((t, a, o) => {
                if (t.p && T[t.p] && o.parent !== T[t.p]) {
                    let i, s = T[t.p],
                        r = o.parent;
                    O === a && s !== r && (t => {
                        "" !== u.clan && void 0 !== u.clan && $("#li-clan-chat").show(), (e.Admins.includes(u.name) || e.Mods.includes(u.name) || e.Helpers.includes(u.name) || e.Designers.includes(u.name)) && $("#li-staff-chat").show(), 5 === T[t].netType ? ($("#toggle-krew-list-modal-button").removeClass().addClass("btn btn-md enabled toggle-krew-list-modal-button"), $("#toggle-shop-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button"), "Labrador" === T[t].name ? $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold") : $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md disabled toggle-bank-modal-button").attr("data-tooltip", "Bank is available at Labrador")) : 1 === T[t].netType && 3 === T[t].shipState && ($("#toggle-krew-list-modal-button").removeClass().addClass("btn btn-md enabled toggle-krew-list-modal-button"), $("#toggle-shop-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button"), "Labrador" === T[T[t].anchorIslandId].name ? $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md enabled toggle-shop-modal-button").attr("data-tooltip", "Deposit or withdraw gold") : $("#toggle-bank-modal-button").removeClass().addClass("btn btn-md disabled toggle-bank-modal-button").attr("data-tooltip", "Bank is available at Labrador"))
                    })(t.p), 5 !== s.netType && (i = void 0 !== o.geometry && void 0 !== s.geometry && r && void 0 !== r.geometry ? s.geometry.worldToLocal(r.geometry.localToWorld(o.geometry.position)) : s.toLocal(o.worldPos()), o.position.x = i.x, o.position.y = i.y, o.position.z = i.z), s.addChildren(o), s.geometry.add(o.geometry), o.geometry.position.set(o.position.x, o.position.y, o.position.z), 1 === s.netType && (s.krewMembers[o.id] = o.geometry.children[0]), u && !1 === u.isCaptain && 5 === u.parent.netType && 5 === s.netType && void 0 !== r && 1 === r.netType && 1 === r.shipState && ($("#abandon-ship-button").hide(), at()), o.isPlayer && o.parent && !o.isCaptain && 1 === o.parent.netType && (3 === o.parent.shipState && ($("#exit-island-button").hide(), $("#invite-div").hide()), $("#abandon-ship-button").show())
                }
                void 0 !== t.t && o.parseTypeSnap(t.t), o.isPlayer || (void 0 !== t.x && (o.position.x = parseFloat(t.x)), void 0 !== t.y && (o.position.y = parseFloat(t.y)), void 0 !== t.z && (o.position.z = parseFloat(t.z)), void 0 !== t.r && (o.rotation = parseFloat(t.r))), void 0 !== t.del && (o.onDestroy(), delete T[o.id], delete P[o.id]), void 0 !== t.t && void 0 !== t.t.e && null !== t.t.e && (void 0 !== t.t.e.l && t.t.e.l !== o.level && (o.level = parseInt(t.t.e.l)), o.isPlayer && (void 0 !== t.t.e.e && t.t.e.e !== o.experience && (o.experience = parseInt(t.t.e.e), o.experienceNeedsUpdate = !0, o.updateExperience()), void 0 !== t.t.e.p.fr && t.t.e.p.fr !== o.points.fireRate && (o.points.fireRate = parseInt(t.t.e.p.fr)), void 0 !== t.t.e.p.ds && t.t.e.p.ds !== o.points.distance && (o.points.distance = parseInt(t.t.e.p.ds)), void 0 !== t.t.e.p.dm && t.t.e.p.dm !== o.points.damage && (o.points.damage = parseInt(t.t.e.p.dm))))
            })(t, a, this)
        }
        onDestroy() {
            if (void 0 !== this.parent) {
                let e = this.parent;
                void 0 !== e.children[this.id] && delete e.children[this.id]
            }
            this.onClientDestroy(), void 0 !== L[this.id] && delete L[this.id], void 0 !== D[this.id] && delete D[this.id]
        }
        onClientDestroy() {
            var e;
            (e = this).parent && e.parent.geometry.remove(e.geometry), f.remove(e.geometry), void 0 !== e.line && (f.remove(e.line), e.line.geometry.dispose())
        }
        tick(e) {
            this.logic(e), this.position.x += this.velocity.x * e, this.position.z += this.velocity.z * e, this.clientlogic(e)
        }
    }
    class gt extends ut {
        constructor(e, t) {
            let a;
            super(), this.netType = 1, this.muted = ["x", "z", "y"];
            let o = "";
            void 0 !== T[e] && (o = T[e].name, void 0 !== T[e].parent && (a = 5 === T[e].parent.netType ? T[e].parent.id : T[e].parent.anchorIslandId)), o = "string" == typeof o ? o : "", this.crewName = "string" == typeof t ? t : `${o}'${"s"===o.charAt(o.length-1)?"":"s"} krew`, this.anchorIslandId = a, e && T[e] ? (this.captainId = e, this.clan = T[e].clan) : (this.captainId = "", this.clan = ""), this.setShipClass(1), this.arcFront = 0, this.arcBack = 0, this.krewMembers = {}, this.krewCount = 0, this.recruiting = !1, this.isLocked = !1, this.departureTime = 5, this.steering = 0, this.shipState = -1, this.overall_kills = 0, this.overall_cargo = 0, this.sinktimer = 0, this.rottimer = 5 * Math.random(), this.leanvalue = 0, this.setName(this.crewName)
        }
        setName(a) {
            let o = "";
            if (void 0 !== this.clan && "" !== this.clan && (o = `[${this.clan}] `), void 0 !== this.geometry) {
                if (void 0 === this.label) {
                    this.label = new THREE.TextSprite({
                        textSize: 4,
                        redrawInterval: e.Labels.redrawInterval,
                        texture: {
                            text: o + a,
                            fontFamily: e.Labels.fontFamily
                        },
                        material: {
                            color: ue.boat,
                            fog: !1
                        }
                    }), this.label.name = "label", this.label.position.set(0, t[this.shipclassId].labelHeight, 0);
                    for (let e = this.geometry.children.length; e--;) this.geometry.children[e].isTextSprite && "label" === this.geometry.children[e].name && this.geometry.remove(this.geometry.children[e]);
                    this.geometry.add(this.label)
                } else this.label.material.map.text = o + a;
                this.label.visible = u && u.parent && this.id !== u.parent.id && this[e.Labels.boats.useMethod]
            }
            this.crewName = a
        }
        updateProps() {
            let e = 0;
            for (let t in this.children) {
                if (void 0 === T[t] || void 0 === T[t].parent || T[t].parent.id !== this.id) {
                    delete this.children[t];
                    continue
                }
                let a = this.children[t];
                a && 0 === a.netType && (e += 1)
            }
            this.krewCount = e, 0 === this.krewCount && ht(this)
        }
        setShipClass(e) {
            this.shipclassId = e;
            let a = t[e];
            this.maxHp = a.hp, this.hp = this.maxHp, this.turnspeed = a.turnspeed, this.maxKrewCapacity = a.maxKrewCapacity, this.size.set(a.width, a.height, a.depth), this.arcFront = a.arcFront, this.arcBack = a.arcBack, this.inertia = a.inertia, this.collisionRadius = a.radius, this.speed = a.speed, this.shipState = 2, this.changeBoatModel(this.shipclassId), void 0 !== this.label && this.label.position.set(0, t[this.shipclassId].labelHeight, 0), void 0 !== u && this === u.parent && (Oe(`Ship upgraded to ${t[this.shipclassId].name}`, 3), ot())
        }
        getKrewOnBoard() {
            for (let e in this.children) this.children[e].parent && this.children[e].parent.id === this.id && (this.geometry.add(this.children[e].geometry), this.children[e].position.x = 0, this.children[e].position.y = 0, this.children[e].position.z = 0), void 0 !== this.children[e].parent && this.children[e].parent.id === this.id || delete this.children[e]
        }
        getHeightAboveWater() {
            return t[this.shipclassId].baseheight * (.2 + this.hp / this.maxHp * .8) - this.sinktimer
        }
        enterIsland(e) {
            0 === this.shipState && (this.shipState = 1), this.anchorIslandId = e
        }
        exitIsland() {
            if (this.shipState = 0, this.recruiting = !1, this.departureTime = 5, this.anchorIslandId) {
                this.rotation = rotationToObject(this, T[this.anchorIslandId]);
                let e = Me(this.rotation);
                this.position.x = T[this.anchorIslandId].position.x - e.x * (T[this.anchorIslandId].dockRadius + 5), this.position.z = T[this.anchorIslandId].position.z - e.y * (T[this.anchorIslandId].dockRadius + 5)
            }
            this.anchorIslandId = void 0
        }
        exitMotherShip() {
            this.rotation = rotationToObject(this, mothership);
            let e = Me(this.rotation);
            this.position.x = mothership.position.x - e.x * (mothership.collisionRadius + 5), this.position.z = mothership.position.z - e.y * (mothership.collisionRadius + 5)
        }
        changeBoatModel(e) {
            ((e, a) => {
                void 0 !== a.geometry && void 0 !== t[e] && (a.body && a.geometry.remove(a.body), a.sail && a.geometry.remove(a.sail), a.mast && a.geometry.remove(a.mast), a.body = t[e].body.clone(), a.body.material = t[e].body.material.clone(), a.body.material.transparent = !0, a.body.scale.set(t[e].scale[0], t[e].scale[1], t[e].scale[2]), a.body.position.set(t[e].offset[0], t[e].offset[1], t[e].offset[2]), a.body.rotation.set(t[e].rotation[0], t[e].rotation[1], t[e].rotation[2]), a.geometry.add(a.body), t[e].sail && (a.sail = t[e].sail.clone(), a.sail.material = t[e].sail.material.clone(), a.sail.material.transparent = !0, a.sail.scale.set(t[e].scale[0], t[e].scale[1], t[e].scale[2]), a.sail.position.set(t[e].offset[0], t[e].offset[1], t[e].offset[2]), a.sail.rotation.set(t[e].rotation[0], t[e].rotation[1], t[e].rotation[2]), a.geometry.add(a.sail)), t[e].mast && (a.mast = t[e].mast.clone(), a.mast.material = t[e].mast.material.clone(), a.mast.material.transparent = !0, a.mast.scale.set(t[e].scale[0], t[e].scale[1], t[e].scale[2]), a.mast.position.set(t[e].offset[0], t[e].offset[1], t[e].offset[2]), a.mast.rotation.set(t[e].rotation[0], t[e].rotation[1], t[e].rotation[2]), a.geometry.add(a.mast)))
            })(e, this)
        }
        getTypeDelta() {
            return (e => {
                let t = {
                    h: e.deltaTypeCompare("h", e.hp),
                    s: e.deltaTypeCompare("s", e.steering.toFixed(4)),
                    c: e.deltaTypeCompare("c", e.shipclassId),
                    b: e.deltaTypeCompare("b", e.captainId),
                    t: e.deltaTypeCompare("t", e.shipState),
                    a: e.deltaTypeCompare("a", e.anchorIslandId),
                    k: e.deltaTypeCompare("k", e.krewCount),
                    e: e.deltaTypeCompare("e", e.speed),
                    r: e.deltaTypeCompare("r", e.recruiting),
                    l: e.deltaTypeCompare("l", e.isLocked),
                    d: e.deltaTypeCompare("d", e.departureTime)
                };
                return Ie(t) && (t = void 0), t
            })(this)
        }
        logic(a) {
            ((a, o) => {
                let i = !1;
                o.position.x > e.worldsize && (o.position.x = e.worldsize, i = !0), o.position.z > e.worldsize && (o.position.z = e.worldsize, i = !0), o.position.x < 0 && (o.position.x = 0, i = !0), o.position.z < 0 && (o.position.z = 0, i = !0);
                let s = T[o.captainId];
                void 0 !== s && void 0 !== o.crewName && (o.speed = t[o.shipclassId].speed + parseFloat(s.movementSpeedBonus / 100));
                let r = new THREE.Vector3(0, 0, o.speed);
                0 === o.shipState ? (o.rotation += void 0 !== s ? o.steering * a * .4 * (o.turnspeed + parseFloat(.05 * s.movementSpeedBonus / 100)) : o.steering * a * .4 * o.turnspeed, r.applyAxisAngle(new THREE.Vector3(0, 1, 0), o.rotation)) : r.set(0, 0, 0), o.velocity = r, o.leanvalue += (4 * o.steering - o.leanvalue) * a, o.rottimer += a, u && u.parent && o.sail && (o.sail.material.visible = o.id !== u.parent.id || Y), u && u.parent && o.mast && (o.mast.material.visible = o.id !== u.parent.id || Y), !o.body || 3 !== o.shipState && -1 !== o.shipState && 4 !== o.shipState ? (o.body.material.opacity = 1, o.sail && (o.sail.material.opacity = .9), o.mast && (o.mast.material.opacity = .9)) : (o.rottimer = 0, o.leanvalue = 0, o.body.material.opacity >= .5 && (o.body.material.opacity -= .0075), o.sail && o.sail.material.opacity >= .5 && (o.sail.material.opacity -= .0075), o.mast && o.mast.material.opacity >= .5 && (o.mast.material.opacity -= .0075)), o.geometry.rotation.x = Math.sin(.5 * o.rottimer + 3) * Math.sin(o.rottimer) * .05, o.geometry.rotation.z = .05 * Math.sin(1 * o.rottimer) - .08 * o.leanvalue, o.hp < 1 && (u && u.parent === o && (Rt.playAudioFile(!1, !1, 1, "sink-crash"), $("#shopping-modal").hide(), $("#show-shopping-modal-button").hide()), o.sinktimer += a, o.sinktimer > 4 && ht(o))
            })(a, this)
        }
        clientlogic() {
            (e => {
                e.position.y = e.getHeightAboveWater();
                let t = new THREE.Vector3(e.position.x, e.position.y, e.position.z);
                e.geometry.position.lerp(t, .8), e.geometry.rotation.y = Ce(e.geometry.rotation.y, e.rotation, .5)
            })(this)
        }
        parseTypeSnap(e) {
            ((e, t) => {
                void 0 !== e.h && e.h !== t.hp && (t.hp = parseInt(e.h)), void 0 !== e.s && (t.steering = parseFloat(e.s)), (void 0 !== e.c && e.c !== t.shipclassId || void 0 === t.body) && t.setShipClass(e.c), void 0 !== e.a && e.a !== t.anchorIslandId && (t.anchorIslandId = e.a), void 0 !== e.k && e.k !== t.krewCount && (t.krewCount = e.k), void 0 !== e.b && t.captainId !== e.b && (t.captainId = e.b), void 0 !== e.e && t.speed !== e.e && (t.speed = parseInt(e.e)), void 0 !== e.r && t.recruiting !== e.r && (t.recruiting = Te(e.r)), void 0 !== e.l && t.isLocked !== e.r && (t.isLocked = Te(e.l)), void 0 !== e.d && t.departureTime !== e.d && (t.departureTime = parseInt(e.d)), void 0 !== e.t && t.shipState !== e.t && (t.shipState = parseInt(e.t), 0 === t.shipState && t.getKrewOnBoard())
            })(e, this)
        }
        onDestroy() {
            this.children = {}, ut.prototype.onDestroy.call(this), C[this.id] && delete C[this.id]
        }
    }
    class bt extends ut {
        constructor(e, t, a) {
            switch (super(), this.netType = 3, this.sendDelta = !1, this.sendSnap = !1, this.sendCreationSnapOnDelta = !0, this.timeout = 1, this.size = new THREE.Vector3(1, 1, 1), this.position.x = t, this.position.y = 0, this.position.z = a, this.impactType = e, e) {
                case 0:
                    this.baseGeometry = me.sphere, this.baseMaterial = he.impact_water;
                    for (let e = 0; e < 3; ++e) kt({
                        vx: 10 * Math.random() - 5,
                        vy: 4 + 2 * Math.random(),
                        vz: 10 * Math.random() - 5,
                        x: t,
                        z: a,
                        y: 0,
                        w: .3,
                        h: .3,
                        d: .3,
                        gravity: 5,
                        rotaSpeed: 20 * Math.random(),
                        duration: 5,
                        sizeSpeed: -.6,
                        material: he.impact_water,
                        geometry: me.box
                    });
                    break;
                case 1:
                    "undefined" != typeof GameAnalytics && GameAnalytics("addDesignEvent", "Game:Session:Hit");
                    for (let e = 0; e < 5; ++e) kt({
                        vx: 20 * Math.random() - 10,
                        vy: 5 + 5 * Math.random(),
                        vz: 20 * Math.random() - 10,
                        x: t,
                        z: a,
                        y: 0,
                        w: .2 + .5 * Math.random(),
                        h: .2 + .5 * Math.random(),
                        d: .2 + .5 * Math.random(),
                        gravity: 12,
                        rotaSpeed: 10 * Math.random(),
                        duration: 2,
                        sizeSpeed: -.8,
                        material: he.splinter,
                        geometry: me.box
                    })
            }
        }
        getTypeDelta() {
            var e;
            (e = this).spawnPacket || (e.spawnPacket = !0)
        }
        logic(e) {
            ((e, t) => {
                t.timeout -= .8 * e, t.timeout <= 0 && ht(t)
            })(e, this)
        }
        clientlogic(e) {
            ((e, t) => {
                if (0 === t.impactType) {
                    t.geometry.position.set(t.position.x, t.position.y, t.position.z), t.geometry.scale.y = 5 * (t.timeout < .5 ? xe(2 * t.timeout) : 1 - (a = 2 * (t.timeout - .5)) * a * a * a * a);
                    let e = xe(t.timeout);
                    t.geometry.scale.x = 1.5 - e, t.geometry.scale.z = 1.5 - e
                }
                var a
            })(0, this)
        }
        parseTypeSnap(e) {
            ((e, t) => {
                void 0 !== e.a && (t.impactType = parseFloat(e.a))
            })(e, this)
        }
    }
    class yt extends ut {
        constructor(t, a, o, i) {
            super(), this.netType = 5, this.sendDelta = !1, this.sendSnap = !1, this.sendCreationSnapOnDelta = !0, this.name = i.name || "", this.setName(this.name), this.dockRadius = i.dockRadius, this.collisionRadius = 30, this.size = new THREE.Vector3(this.dockRadius, 20, this.dockRadius), this.position.x = a, this.position.z = o, this.baseGeometry = M.island, this.baseMaterial = he.island;
            let s = this.dockRadius / 10 / 8 * 9;
            this.modelscale.set(s, s, s), this.modeloffset.set(0, 1, 0), this.visualCue = new THREE.Mesh(new THREE.RingBufferGeometry(this.dockRadius - 1, this.dockRadius, 30), he.islandradius), this.visualCue.rotation.x = -Math.PI / 2, this.visualCue.position.set(this.position.x, 1, this.position.z), f.add(this.visualCue), this.landmarkType = t, this.wavetimer = 0;
            for (const t of e.palmTree) t === this.name && (this.palm = new THREE.Mesh(M.palm, he.island), this.palm.position.set(this.position.x + this.dockRadius / 4, 0, this.position.z - this.dockRadius / 1.7), this.palm.scale.x = this.dockRadius / 9, this.palm.scale.y = this.dockRadius / 9, this.palm.scale.z = this.dockRadius / 9, f.add(this.palm));
            for (const t of e.christmasTree) t === this.name && (this.christmasTree = R.christmasTree, this.christmasTree.position.set(this.position.x - this.dockRadius / 10, this.dockRadius / 50, this.position.z - this.dockRadius / 10), this.christmasTree.scale.x = this.dockRadius / (100 / .35), this.christmasTree.scale.y = this.dockRadius / (100 / .35), this.christmasTree.scale.z = this.dockRadius / (100 / .35), f.add(this.christmasTree));
            for (const t of e.snowman) t === this.name && (this.snowman = R.snowman, this.snowman.position.set(this.position.x + this.dockRadius / (10 / 3), this.dockRadius / (100 / 38), this.position.z + this.dockRadius / (100 / 35)), this.snowman.rotation.set(0, -500, 0), this.snowman.scale.x = this.dockRadius / (100 / .17), this.snowman.scale.y = this.dockRadius / (100 / .17), this.snowman.scale.z = this.dockRadius / (100 / .17), f.add(this.snowman))
        }
        setName(t) {
            void 0 !== this.geometry && (void 0 === this.label && (this.label = new THREE.TextSprite({
                textSize: 12,
                redrawInterval: e.Labels.redrawInterval,
                texture: {
                    text: t,
                    fontFamily: e.Labels.fontFamily
                },
                material: {
                    color: ue.landmark,
                    fog: !1
                }
            }), this.label.name = "label", this.label.position.set(0, 42, 0), this.geometry.add(this.label)), this.label.material.map.text = t, this.label.visible = this.inRange), this.name = t
        }
        logic(e) {}
        clientlogic(e) {
            ((e, t) => {
                t.wavetimer += e;
                let a = .5 + .5 * Math.sin(t.wavetimer);
                x.position.y = .1 + .5 * a
            })(e, this)
        }
        parseTypeSnap(e) {}
    }
    class ft extends ut {
        constructor(e, t, a, o) {
            super(), this.netType = 4, this.sendDelta = 1 !== o, this.sendSnap = 1 !== o, this.sendCreationSnapOnDelta = !0, this.spawnPacket = !1, this.pickerId = "", this.type = o, this.picking = 1 === o, this.catchingFish = !1;
            let i = 1;
            switch (0 === o ? i = parseInt(e) + 1 : 1 === o ? (i = .05 * e, "undefined" != typeof GameAnalytics && GameAnalytics("addDesignEvent", "Game:Session:CatchFish")) : 3 !== o && 2 !== o || (i = .02), this.size = new THREE.Vector3(i, i, i), this.modelscale = new THREE.Vector3(i, i, i), this.pickupSize = e, this.position.x = t, this.position.z = a, this.type) {
                case 0:
                    this.baseGeometry = me.box, this.baseMaterial = he.crate;
                    break;
                case 1:
                    this.baseModel = R.fish, this.modeloffset = ge.modeloffsetFishShellClam;
                    break;
                case 2:
                    Math.round(Math.random()) ? (this.baseModel = R.shell, this.modeloffset = ge.modeloffsetFishShellClam) : (this.baseModel = R.clam, this.modeloffset = ge.modeloffsetFishShellClam, this.modelscale = new THREE.Vector3(.03, .03, .03));
                    break;
                case 3:
                    this.baseModel = R.crab, this.modeloffset = ge.modeloffsetCrab, this.modelrotation = new THREE.Vector3(0, Math.PI, 0);
                    break;
                case 4:
                    this.baseModel = R.chest
            }
            this.type <= 1 || 4 === this.type ? (this.floattimer = 0 === this.type ? 5 * Math.random() : 5 * Math.random() + .5, this.rotationspeed = .5 * Math.random() + .5) : (this.floattimer = 1, this.rotationspeed = 0)
        }
        setName() {
            void 0 !== this.geometry && (void 0 === this.label && (this.label = new THREE.TextSprite({
                textSize: 3,
                redrawInterval: e.Labels.redrawInterval,
                texture: {
                    text: this.id,
                    fontFamily: e.Labels.fontFamily
                },
                material: {
                    color: ue.player,
                    fog: !1
                }
            }), this.label.name = "label", this.label.position.set(0, 3, 0), this.geometry.add(this.label)), this.label.material.map.text = this.id)
        }
        getTypeDelta() {
            return (e => {
                if (1 !== e.type) {
                    let t = {
                        s: e.deltaTypeCompare("s", e.pickupSize),
                        p: e.deltaTypeCompare("p", e.picking),
                        i: e.deltaTypeCompare("i", e.pickerId),
                        t: e.deltaTypeCompare("t", e.type)
                    };
                    return Ie(t) && (t = void 0), t
                }
                e.spawnPacket || (e.spawnPacket = !0)
            })(this)
        }
        logic(e) {}
        clientlogic(e) {
            ((e, t) => {
                if (t.floattimer += 3 * e, t.geometry.rotation.x += e * t.rotationspeed, t.geometry.rotation.z += e * t.rotationspeed, !0 === t.picking && T[t.pickerId]) {
                    if (T[t.pickerId].geometry) {
                        let e = T[t.pickerId].geometry.getWorldPosition(new THREE.Vector3);
                        0 !== t.type && 4 !== t.type || (t.geometry.translateOnAxis(t.geometry.worldToLocal(e), .05), t.geometry.scale.set(t.geometry.scale.x - .05, t.geometry.scale.y - .05, t.geometry.scale.z - .05), u && t.pickerId === u.id && t.geometry.scale.x <= .05 && t.geometry.scale.x > 0 && Rt.playAudioFile(!1, !1, 1, "get-crate")), 1 === t.type && (t.catchingFish ? t.geometry.translateOnAxis(t.geometry.worldToLocal(e), .05) : t.geometry.position.y += .5, t.geometry.position.y >= 20 && (t.catchingFish = !0, u && t.pickerId === u.id && Rt.playAudioFile(!1, !1, 1, "catch-fish")), t.geometry.scale.set(t.geometry.scale.x - .009, t.geometry.scale.y - .009, t.geometry.scale.z - .009)), 2 === t.type && (t.geometry.translateOnAxis(t.geometry.worldToLocal(e), .05), t.geometry.scale.set(t.geometry.scale.x - .05, t.geometry.scale.y - .05, t.geometry.scale.z - .05), void 0 !== T[t.pickerId] && T[t.pickerId].gold > 500 && (!T[t.pickerId].ownsCannon || !T[t.pickerId].ownsFishingRod || void 0 !== T[t.pickerId].parent && 1 !== T[t.pickerId].parent.netType) && (nt.hideSuggestionBox = !1)), 3 === t.type && (t.geometry.translateOnAxis(t.geometry.worldToLocal(e), .05), t.geometry.scale.set(t.geometry.scale.x - .05, t.geometry.scale.y - .05, t.geometry.scale.z - .05), u && t.pickerId === u.id && Rt.playAudioFile(!1, !1, 1, "catch-crab"), void 0 !== T[t.pickerId] && T[t.pickerId].gold > 500 && (!T[t.pickerId].ownsCannon || !T[t.pickerId].ownsFishingRod || void 0 !== T[t.pickerId].parent && 1 !== T[t.pickerId].parent.netType) && (nt.hideSuggestionBox = !1))
                    }
                } else 2 !== t.type && 3 !== t.type || t.dockedLogic(), 3 === t.type && void 0 !== t.geometry && (Math.round(t.geometry.position.x) === Math.round(t.position.x) && Math.round(t.geometry.position.z) === Math.round(t.position.z) || (t.geometry.lookAt(t.position.x, t.actualY || t.position.y, t.position.z), Math.round(t.geometry.position.x) !== Math.round(t.position.x) && t.geometry.position.setX(Ce(t.geometry.position.x, t.position.x, .01)), Math.round(t.geometry.position.z) !== Math.round(t.position.z) && t.geometry.position.setZ(Ce(t.geometry.position.z, t.position.z, .01))))
            })(e, this)
        }
        dockedLogic() {
            (e => {
                if (void 0 === e.timeCounters.dockedLogic ? e.timeCounters.dockedLogic = {
                        time: performance.now(),
                        previousTime: performance.now()
                    } : e.timeCounters.dockedLogic.time = performance.now(), e.timeCounters.dockedLogic.time - e.timeCounters.dockedLogic.previousTime > 2e3) {
                    e.timeCounters.dockedLogic.previousTime = e.timeCounters.dockedLogic.time;
                    for (let e in T) {
                        let t = T[e];
                        if (4 === t.netType && (2 === t.type || 3 === t.type)) {
                            let e, a, o = new THREE.Raycaster,
                                i = 100,
                                s = [];
                            if (T) {
                                a = new THREE.Vector3(0, -1, 0), e = t.geometry.position.clone(), e.set(e.x, i, e.z), o.set(e, a);
                                for (let e in T) 5 === T[e].netType && s.push(T[e].geometry.children[0]);
                                let r = o.intersectObjects(s),
                                    n = 0;
                                if (r.length > 0)
                                    for (const e of r) e.point.y > n && (n = e.point.y);
                                t.position.y = n, t.actualY = n, t.position.setY(n)
                            }
                        }
                    }
                }
            })(this)
        }
        parseTypeSnap(e) {
            ((e, t) => {
                void 0 !== e.s && e.s !== t.pickupSize && (t.pickupSize = parseInt(e.s)), void 0 !== e.p && e.p !== t.picking && (t.picking = Te(e.p)), void 0 !== e.i && e.i !== t.pickerId && (t.pickerId = e.i), void 0 !== e.t && e.t !== t.type && (t.type = parseInt(e.t))
            })(e, this)
        }
        onDestroy() {
            ut.prototype.onDestroy.call(this), z[this.id] && delete z[this.id]
        }
    }
    ft.prototype.timeCounters = {};
    class vt extends ut {
        constructor(t) {
            super(), this.netType = 0, this.name = void 0 !== t && t.name || "", this.setName(this.name), this.state = 0, this.isLoggedIn = t.t.l, this.position.y = 0, this.pitch = 0, this.size = ge.sizePlayer, this.walkForward = 0, this.walkSideward = 0, this.isFishing = !1, this.activeWeapon = 0, this.use = !1, this.cooldown = 0, this.ownsCannon = !0, this.ownsFishingRod = !0, this.rodRotationSpeed = .25 * Math.random() + .25, this.score = 50, this.overall_cargo = 0, this.gold = (t.startingItems || {}).gold || 0, this.shipsSank = 0, this.checkedItemsList = !1, this.isCaptain = !1, this.oldCaptainState = !1, this.jumping = 0, this.jump_count = 0, this.jump = 0, this.jumpVel = 0, this.itemId = void 0, this.attackSpeedBonus = 0, this.movementSpeedBonus = 0, this.level = 0, this.experience = 0, this.experienceBase = 100, this.experienceMaxLevel = 50, this.experienceNeedsUpdate = !0, this.points = {
                fireRate: 0,
                distance: 0,
                damage: 0
            }, this.bank = {
                deposit: 0
            }, this.clan = "" === t.t.cl ? void 0 : t.t.cl, this.clanLeader = t.t.cll, this.clanOwner = t.t.clo, this.clanRequest = t.t.cr, P[t.id] || (P[t.id] = this.name), this.notifiscationHeap = {}, this.crosshair = new THREE.TextSprite({
                textSize: .0365,
                redrawInterval: 10,
                texture: {
                    text: "+",
                    fontFamily: e.Labels.fontFamily
                },
                material: {
                    color: ue.crosshair,
                    fog: !1
                }
            }), this.pointsFormula = {
                getFireRate: () => 1.5 * this.points.fireRate,
                getDistance: () => this.points.distance,
                getDamage: () => this.points.damage,
                getExperience: e => parseInt(2.4 * e)
            }, this.experienceNeededForLevels = function(e) {
                let t = {
                    0: {
                        amount: 0,
                        total: 0
                    },
                    1: {
                        amount: e.experienceBase,
                        total: e.experienceBase
                    }
                };
                for (let a = 1; a < e.experienceMaxLevel + 1; a++) t[a + 1] = {}, t[a + 1].amount = Math.ceil(1.07 * t[a].amount), t[a + 1].total = t[a + 1].amount + t[a].total;
                return t
            }(this)
        }
        setName(t) {
            if (void 0 !== this.geometry) {
                let a = "";
                void 0 !== this.clan && "" !== this.clan && (a = `[${this.clan}] `);
                let o, i = void 0 !== u.parent && 1 === u.parent.netType,
                    s = e.Admins.includes(this.name),
                    r = e.Mods.includes(this.name),
                    n = e.Helpers.includes(this.name),
                    l = e.Designers.includes(this.name);
                o = s ? ue.admin : r ? ue.mod : n ? ue.helper : l ? ue.designer : this.isPlayer ? ue.myself : void 0 !== u && void 0 !== u.clan && "" !== u.clan && u.clan === T[this.id].clan ? ue.clan : void 0 !== u && i && void 0 !== T[this.id].parent && u.parent.id === T[this.id].parent.id && void 0 !== T[u.parent.id] && T[u.parent.id].captainId === this.id ? ue.captain : void 0 !== u && i && void 0 !== T[this.id].parent && u.parent.id === T[this.id].parent.id ? ue.krewmate : ue.player, void 0 === this.label ? (this.label = new THREE.TextSprite({
                    textSize: .7,
                    redrawInterval: e.Labels.redrawInterval,
                    texture: {
                        text: `${a+(s?"[Admin] ":r?"[Mod] ":n?"[Helper] ":l?"[Designer] ":"")+t} (lvl ${this.level})`,
                        fontFamily: e.Labels.fontFamily
                    },
                    material: {
                        color: o,
                        fog: !1
                    }
                }), this.label.name = "label", this.label.position.set(0, 2.2, 1.5), this.geometry.add(this.label)) : (this.label.material.color = o, this.label.material.map.text = `${a+(s?"[Admin] ":r?"[Mod] ":n?"[Helper] ":l?"[Designer] ":"")+t} (lvl ${this.level})`), this.label.visible = u && u.parent && this.inRange && void 0 !== this.parent && (5 === this.parent.netType || this.parent.inRange)
            }
            this.name = t
        }
        setPlayerBody(e, t) {
            let a = (e = e || 0) < 0 ? W[-1 * e - 1] : q[e];
            this.playerBody = a.body.clone(), this.playerBody.scale.set(a.scale.x, a.scale.y, a.scale.z), this.playerBody.position.set(a.offset.x, a.offset.y, a.offset.z), this.playerBody.rotation.set(a.rotation.x, a.rotation.y, a.rotation.z), this.geometry.add(this.playerBody), this.geometry.receiveShadow = !0, this.weapon = R.cannon.clone(), this.weapon.scale.set(.05, .05, .05), this.weapon.position.set(0, 0, -.4), this.weapon.rotation.set(0, 0, 0), this.weapon.name = "body", this.geometry.add(this.weapon), t = t || 0, this.captainHat = A[t].clone(), this.captainHat.scale.set(.4, .4, .4), this.captainHat.position.set(0, 1 === t ? 26.5 : 25, 1 === t ? 4 : 2 === t ? 1 : 0), this.captainHat.name = "captainHat"
        }
        notifiscation() {
            for (let t in this.notifiscationHeap) this.notifiscationHeap[t].isNew ? (this.notifiscationHeap[t].sprite = new THREE.TextSprite({
                textSize: 1 === this.notifiscationHeap[t].type ? .6 : .9,
                redrawInterval: 10,
                texture: {
                    text: this.notifiscationHeap[t].text,
                    fontFamily: e.Labels.fontFamily
                },
                material: {
                    color: 1 === this.notifiscationHeap[t].type ? 16766720 : 6487808,
                    fog: !1,
                    opacity: 0
                }
            }), this.notifiscationHeap[t].sprite.position.set(3, 1, 0), this.geometry.add(this.notifiscationHeap[t].sprite), this.notifiscationHeap[t].isNew = !1) : (this.notifiscationHeap[t].sprite.position.y += .05, this.notifiscationHeap[t].sprite.position.y > 6 ? (this.geometry.remove(this.notifiscationHeap[t].sprite), delete this.notifiscationHeap[t]) : this.notifiscationHeap[t].sprite.position.y < 3 && (this.notifiscationHeap[t].sprite.material.opacity += .025))
        }
        updateExperience(e) {
            let t = this.experience,
                a = 0;
            "number" == typeof e && (t += this.pointsFormula.getExperience(e)), t > this.experienceNeededForLevels[this.experienceMaxLevel].total && (t = this.experienceNeededForLevels[this.experienceMaxLevel].total);
            for (let e in this.experienceNeededForLevels) {
                if (t < this.experienceNeededForLevels[e].total) break;
                a = e
            }
            a = parseInt(a), this.level = a, this.experience = t, void 0 !== nt && this.experienceNeedsUpdate && (Ae(), this.experienceNeedsUpdate = !1)
        }
        changeWeapon() {
            if (this.weapon && 0 === this.activeWeapon) this.geometry.remove(this.weapon), this.weapon = R.cannon.clone(), this.isPlayer && Rt.playAudioFile(!1, !0, 1, "switch-rod-cannon"), this.weapon.scale.set(.05, .05, .05), this.weapon.position.set(0, .1, -.4), this.weapon.rotation.set(0, 0, 0), this.weapon.name = "body", this.geometry.add(this.weapon);
            else if (this.weapon && 1 === this.activeWeapon) {
                this.geometry.remove(this.weapon);
                let e = new THREE.Mesh(M.fishingrod, he.fishingrod);
                e.receiveShadow = !0, this.isPlayer && Rt.playAudioFile(!1, !0, 1, "switch-rod-cannon"), this.weapon = e.clone(), this.weapon.scale.set(.03, .03, .03), this.weapon.position.set(0, .1, -.2), this.weapon.rotation.set(0, Math.PI, 0), this.weapon.name = "body", this.geometry.add(this.weapon)
            } else this.weapon && 2 === this.activeWeapon && (this.geometry.remove(this.weapon), this.isPlayer && Rt.playAudioFile(!1, !0, 1, "switch-rod-cannon"), this.weapon = R.spyglass.clone(), this.weapon.scale.set(.7, .7, .7), this.weapon.position.set(0, .5, .3), this.weapon.rotation.set(.5, Math.PI / 2 + .07, .5), this.weapon.name = "body", this.geometry.add(this.weapon))
        }
        tryJump() {
            this.jumpVel > 0 || this.jump > 0 || (this.jumpVel = 16)
        }
        getTypeDelta() {
            return (e => {
                let t = {
                    f: e.deltaTypeCompare("f", e.walkForward),
                    s: e.deltaTypeCompare("s", e.walkSideward),
                    u: e.deltaTypeCompare("u", e.use),
                    p: e.deltaTypeCompare("p", e.pitch.toFixed(2)),
                    j: e.deltaTypeCompare("j", e.jumping),
                    w: e.deltaTypeCompare("w", e.activeWeapon),
                    c: e.deltaTypeCompare("c", e.checkedItemsList),
                    d: e.deltaTypeCompare("d", e.itemId),
                    o: e.deltaTypeCompare("o", e.ownsCannon),
                    r: e.deltaTypeCompare("r", e.ownsFishingRod),
                    v: e.deltaTypeCompare("v", e.availablePoints)
                };
                return Ie(t) && (t = void 0), t
            })(this)
        }
        logic(e) {
            ((e, t) => {
                t.oldCaptainState = t.isCaptain, t.isCaptain = t.parent && t.id === t.parent.captainId;
                let a = new THREE.Vector3(0, 0, 0);
                if (a.z = -t.walkForward, a.x = t.walkSideward, a.lengthSq() > 0 && a.normalize(), a.applyAxisAngle(new THREE.Vector3(0, 1, 0), t.rotation), t.velocity = a, t.velocity.x *= 4, t.velocity.z *= 4, t.parent && (5 !== t.parent.netType && 3 !== t.parent.shipState && -1 !== t.parent.shipState || (t.velocity.x *= 2, t.velocity.z *= 2), 5 !== t.parent.netType && 3 !== t.parent.shipState && 2 !== t.parent.shipState && -1 !== t.parent.shipState && 4 !== t.parent.shipState)) {
                    if (t.position.x > t.parent.size.x / 2 && (t.position.x = t.parent.size.x / 2, t.isPlayer && Rt.playAudioFile(!1, !1, 1, "turning")), t.position.z > t.parent.size.z / 2 && (t.position.z = t.parent.size.z / 2, t.isPlayer && Rt.playAudioFile(!1, !1, 1, "turning")), t.position.x < -t.parent.size.x / 2 && (t.position.x = -t.parent.size.x / 2, t.isPlayer && Rt.playAudioFile(!1, !1, 1, "turning")), t.position.z < -t.parent.size.z / 2 && (t.position.z = -t.parent.size.z / 2, t.isPlayer && Rt.playAudioFile(!1, !1, 1, "turning")), t.parent.arcFront > 0 && t.position.z > 0) {
                        let e = t.parent.size.x / 2 - t.position.z * t.parent.arcFront;
                        t.position.x > 0 ? t.position.x > e && (t.position.x = e) : t.position.x < -e && (t.position.x = -e)
                    }
                    if (t.parent.arcBack > 0 && t.position.z < 0) {
                        let e = t.parent.size.x / 2 + t.position.z * t.parent.arcBack;
                        t.position.x > 0 ? t.position.x > e && (t.position.x = e) : t.position.x < -e && (t.position.x = -e)
                    }
                }
                if (t.cooldown > 0 && (t.cooldown -= e), !0 === t.use && t.cooldown <= 0) {
                    let e = parseFloat((t.attackSpeedBonus + t.pointsFormula.getFireRate()) / 100);
                    t.cooldown = 1 === t.activeWeapon ? .7 : (1.5 - e).toFixed(2), 0 === t.activeWeapon && t.isPlayer && t.parent && 3 !== t.parent.shipState && 4 !== t.parent.shipState ? Rt.playAudioFile(!1, !0, 1, "cannon") : t.isPlayer && 1 === t.activeWeapon && Rt.playAudioFile(!1, !0, 1, "cast-rod")
                }
                t.isPlayer || (t.geometry.rotation.x = t.pitch + t.rotationOffset)
            })(e, this)
        }
        clientlogic(e) {
            ((e, t) => {
                if (t.isPlayer && !Ie(t.notifiscationHeap) && t.notifiscation(), t.namesLogic(), t.isPlayer) {
                    t.walkForward = 0, t.walkSideward = 0, oe ? t.walkForward = 1 : ie && (t.walkForward = -1), ae ? t.walkSideward = 1 : te && (t.walkSideward = -1), t.jumping = se ? 1 : 0, 1 !== t.state || $("#game-over-modal").is(":visible") || $("#game-over-modal").modal("show");
                    let e = 1;
                    if (2 === t.state && (o.position.set(0, 1, 5), o.rotation.z = 0, o.rotation.y = 0, o.rotation.x = -.4, t.geometry.add(o), t.state = 0), o.parent === t.geometry) {
                        let a, i = new THREE.Vector3;
                        2 !== t.activeWeapon ? ($("#fp-mode-button").is(":checked") ? (a = 2 - Math.max(r.cameraX, 2), i = new THREE.Vector3(o.position.x, 1.5 + Math.min(8, Math.max(0, .5 * r.cameraX)), 1.21 + .21 * a), null != t.captainHat && (t.captainHat.visible = !1)) : (a = .2 - Math.max(r.cameraX, .2), i = new THREE.Vector3(o.position.x, (_ >= 1 && _ <= 10 ? 2 * _ : 2) + Math.min(_ >= 1 && _ <= 10 ? 8 * _ : 8, Math.max(0, 10 * r.cameraX)), (_ >= 1 && _ <= 10 ? 8 * _ : 8) + a * (_ >= 1 && _ <= 10 ? 8 * _ : 8)), null != t.captainHat && (t.captainHat.visible = !0)), 1 !== o.zoom && (o.zoom = 1, o.updateProjectionMatrix(), f.fog.density = .007), t.crosshair.visible = !0) : 2 === t.activeWeapon && (a = 2 - Math.max(r.cameraX, 2), i = new THREE.Vector3(o.position.x, 2, -.01), f.fog.density = .0055, o.zoom = r.zoom + 1.5, o.updateProjectionMatrix(), t.crosshair.visible = !1), t.geometry.rotation.x = Ce(t.geometry.rotation.x, Math.min(e, Math.max(-1, r.cameraX + t.rotationOffset)), .8), t.rotation = r.cameraY, o.position.lerp(i, 1), o.rotation.x = Ce(o.rotation.x, a, 1), t.pitch = r.cameraX, t.crosshair.position.x = o.position.x, t.crosshair.position.y = o.position.y + .01, t.crosshair.position.z = o.position.z - .4
                    }
                    r.isMouseLookLocked ? t.use = r.lmb : t.use = !1
                }
                if (1 === t.jumping && t.tryJump(), t.jumpVel = t.jumpVel - 80 * e, t.jump += t.jumpVel * e, t.jump < 0 && (t.jump = 0), t.isPlayer && t.parent && (0 === t.parent.shipState || 1 === t.parent.shipState ? (0 !== t.walkForward && Rt.playAudioFile(!1, !1, 1, "step-wood01"), 0 !== t.walkSideward && Rt.playAudioFile(!1, !1, 1, "step-wood02")) : (0 !== t.walkForward && Rt.playAudioFile(!1, !1, 1, "step-sand01"), 0 !== t.walkSideward && Rt.playAudioFile(!1, !1, 1, "step-sand02"))), t.isPlayer && t.parent && (3 === t.parent.shipState || 2 === t.parent.shipState || -1 === t.parent.shipState || 4 === t.parent.shipState || 5 === t.parent.netType)) {
                    Je(), !nt.hideSuggestionBox && u && u.gold > 500 && !$("#shopping-modal").is(":visible") && $("#earn-gold").is(":visible") && $("#earn-gold").hide();
                    let e = T[t.parent.anchorIslandId || t.parent.id],
                        a = new THREE.Vector3(0, 0, 0);
                    if (5 === t.parent.netType) {
                        let o = t.geometry.position.clone();
                        a.y = o.y;
                        let i = o.distanceTo(a);
                        e.dockRadius - 2 < i && (o.lerp(a, 1 - (e.dockRadius - 2) / i), t.position.x = o.x, t.position.z = o.z)
                    } else if (1 === t.parent.netType) {
                        let o = T[t.parent.id],
                            i = t.geometry.getWorldPosition(new THREE.Vector3).clone();
                        i = e.geometry.worldToLocal(i), a.y = i.y;
                        let s = i.distanceTo(a);
                        e.dockRadius - 2 < s && (i.lerp(a, 1 - (e.dockRadius - 2.5) / s), i = e.geometry.localToWorld(i), i = o.geometry.worldToLocal(i), t.position.x = i.x, t.position.z = i.z)
                    }
                }
                t.dockedLogic(), t.geometry.position.set(t.position.x, t.position.y + t.jump, t.position.z), t.geometry.rotation.y = t.rotation, void 0 !== t.weapon && (1 === t.activeWeapon ? (t.weapon.rotation.x += e * t.rodRotationSpeed, t.weapon.rotation.x > .75 && (t.weapon.rotation.x = 0)) : t.weapon.rotation.x = .1 - t.rotationOffset), t.isCaptain !== t.oldCaptainState && (t.parent && t.isPlayer && !t.isCaptain && (Oe("You are not the captain anymore!", 4, 4e3), 3 === t.parent.shipState || 4 === t.parent.shipState || -1 === t.parent.shipState ? ($("#toggle-shop-modal-button").removeClass("disabled").addClass("enabled"), $("#toggle-krew-list-modal-button").removeClass("disabled").addClass("enabled"), $("#exit-island-button").hide(), $("#toggle-invite-link-button").show(), $("#quests-button").show()) : ($("#toggle-shop-modal-button").removeClass("enabled").addClass("disabled"), $("#toggle-krew-list-modal-button").removeClass("enabled").addClass("disabled")), 1 === t.parent.shipState && $("#docking-modal").hide(), $("#abandon-ship-button").show()), t.parent && t.isPlayer && t.isCaptain && (Oe("You are the captain now!", 4, 4e3), 3 === t.parent.shipState || 4 === t.parent.shipState || -1 === t.parent.shipState ? ($("#toggle-shop-modal-button").removeClass("disabled").addClass("enabled"), $("#toggle-krew-list-modal-button").removeClass("disabled").addClass("enabled"), $("#exit-island-button").show(), $("#toggle-invite-link-button").show(), $("#quests-button").show()) : ($("#toggle-shop-modal-button").removeClass("enabled").addClass("disabled"), $("#toggle-krew-list-modal-button").removeClass("enabled").addClass("disabled")), 1 === t.parent.shipState && $("#docking-modal").show(), $("#abandon-ship-button").hide()), t.isCaptain ? t.playerBody.add(t.captainHat) : t.playerBody.remove(t.playerBody.getObjectByName("captainHat")))
            })(e, this)
        }
        namesLogic() {
            (t => {
                if (t.isPlayer) {
                    let a = 5;
                    void 0 === t.timeCounters.namesLogic ? t.timeCounters.namesLogic = {
                        time: performance.now(),
                        previousTime: performance.now()
                    } : t.timeCounters.namesLogic.time = performance.now(), t.timeCounters.namesLogic.time - t.timeCounters.namesLogic.previousTime > 1e3 / a && (t.timeCounters.namesLogic.previousTime = t.timeCounters.namesLogic.time, requestAnimationFrame((() => {
                        let a = o.getWorldPosition(new THREE.Vector3);
                        for (let i in T)
                            if (0 === T[i].netType || 1 === T[i].netType || 5 === T[i].netType) {
                                let s = Se(a, T[i].geometry.getWorldPosition(new THREE.Vector3)),
                                    r = 2 === t.activeWeapon ? o.far : e.Labels.distanceMultiplier[T[i].netType];
                                T[i].inRange = s <= r, e.setProperties.inVision && (T[i].inVision = T[i].inRange && Re(T[i], o)), 0 === T[i].netType && T[i].setName(T[i].name), 1 === T[i].netType && T[i].setName(T[i].crewName), T[i].netType > 1 && T[i].setName(T[i].name)
                            }
                    })))
                }
            })(this)
        }
        dockedLogic() {
            (e => {
                if (e.isPlayer) {
                    let a = 20;
                    if (void 0 === e.timeCounters.dockedLogic ? e.timeCounters.dockedLogic = {
                            time: performance.now(),
                            previousTime: performance.now()
                        } : e.timeCounters.dockedLogic.time = performance.now(), e.timeCounters.dockedLogic.time - e.timeCounters.dockedLogic.previousTime > 1e3 / a) {
                        let a, o;
                        e.timeCounters.dockedLogic.previousTime = e.timeCounters.dockedLogic.time;
                        let i, s = 100,
                            r = [],
                            n = {
                                object: void 0,
                                height: s
                            },
                            l = 0,
                            d = 0;
                        if (e.parent && T) {
                            o = new THREE.Vector3(0, -1, 0), a = e.geometry.getWorldPosition(new THREE.Vector3).clone(), a.set(a.x, s, a.z);
                            let c = new THREE.Raycaster;
                            if (c.set(a, o), e.parent && (e.parent.anchorIslandId && T[e.parent.anchorIslandId] && (r.push(T[e.parent.anchorIslandId].geometry.children[0]), T[e.parent.anchorIslandId].palm && r.push(T[e.parent.anchorIslandId].palm)), void 0 !== T[e.parent.id] && (5 === T[e.parent.id].netType && (r.push(T[e.parent.id].geometry.children[0]), T[e.parent.id].palm && r.push(T[e.parent.id].palm)), 1 === T[e.parent.id].netType && void 0 !== T[e.parent.id].mast && r.push(T[e.parent.id].geometry.getObjectByName("body")))), i = c.intersectObjects(r), i.length > 0) {
                                for (; l < i.length; l++) i[l].distance < n.height && (n = {
                                    height: i[l].distance,
                                    object: i[l].object
                                });
                                d = s - n.height
                            }
                            if (n.object && "body" === n.object.name) {
                                d -= T[e.parent.id].getHeightAboveWater();
                                let a = e.position.x < 0,
                                    o = t[T[e.parent.id].shipclassId].width / 2;
                                0 !== e.position.x && (e.isCaptain ? d += Math.abs(T[e.parent.id].leanvalue / 2) : a ? d -= T[e.parent.id].leanvalue / 2 * (Math.abs(e.position.x) / o) : d += T[e.parent.id].leanvalue / 2 * (Math.abs(e.position.x) / o))
                            }
                            n.object && "body" !== n.object.name && void 0 !== T[e.parent.id] && 1 === T[e.parent.id].netType && (d -= T[e.parent.id].getHeightAboveWater()), e.position.y = d
                        }
                    }
                }
            })(this)
        }
        parseTypeSnap(e) {
            ((e, t) => {
                e.f, e.s, void 0 !== e.u && (t.use = Te(e.u)), void 0 !== e.p && (t.pitch = parseFloat(e.p)), void 0 !== e.j && (t.jumping = parseInt(e.j)), void 0 !== e.m && (t.movementSpeedBonus = parseInt(e.m)), void 0 !== e.v && e.v !== t.availablePoints && (t.availablePoints = parseInt(e.v)), void 0 !== e.o && e.o !== t.ownsCannon && (t.ownsCannon = Te(e.o), void 0 !== nt && ot()), void 0 !== e.r && e.r !== t.ownsFishingRod && (t.ownsFishingRod = Te(e.r), void 0 !== nt && ot()), void 0 !== e.c && e.c !== t.checkedItemsList && (t.checkedItemsList = Te(e.c)), void 0 !== e.d && e.d !== t.itemId && (t.itemId = parseInt(e.d), void 0 !== nt && ot()), void 0 !== e.w && e.w !== t.activeWeapon && (t.activeWeapon = parseInt(e.w), t.changeWeapon())
            })(e, this)
        }
        onDestroy() {
            ut.prototype.onDestroy.call(this), this === u && (u = void 0), this.parent && (delete this.parent.children[this.id], 1 === this.parent.netType && (this.parent.updateProps(), 0 === Object.keys(this.parent.children).length && ht(this.parent))), H[this.id] && delete H[this.id]
        }
    }
    vt.prototype.rotationOffset = -.45, vt.prototype.timeCounters = {};
    class wt extends ut {
        constructor() {
            super(), this.netType = 2, this.size = ge.sizeProjectile, this.muted = ["x", "z"], this.sendDelta = !1, this.sendSnap = !1, this.sendCreationSnapOnDelta = !0, this.spawnPacket = !1, this.type = -1, this.reel = !1, this.shooterid = "", this.impact = void 0, this.setProjectileModel = !0, this.particletimer = 0, this.shooterStartPos = new THREE.Vector3, this.startPoint = new THREE.Vector3, this.endPoint = new THREE.Vector3
        }
        getTypeDelta() {
            var e;
            (e = this).spawnPacket || (e.spawnPacket = !0)
        }
        logic(t) {
            ((t, a) => {
                if ("" === a.shooterid || void 0 === T[a.shooterid] || void 0 !== T[a.shooterid] && -1 !== a.type && a.type !== T[a.shooterid].activeWeapon) return a.impact && (a.impact.destroy = !0), void ht(a);
                if (void 0 !== T[a.shooterid] && !1 === T[a.shooterid].use && (T[a.shooterid].isFishing = !1), a.position.y >= 0 && (a.velocity.y -= 25 * t, a.position.y += a.velocity.y * t), void 0 !== T[a.shooterid] && void 0 !== T[a.shooterid].parent) {
                    let e = T[a.shooterid].worldPos();
                    void 0 !== T[a.shooterid].parent && 5 === T[a.shooterid].parent.netType ? e.z.toFixed(2) !== a.shooterStartPos.z.toFixed(2) && e.x.toFixed(2) !== a.shooterStartPos.x.toFixed(2) && (a.reel = !0, T[a.shooterid].isFishing = !1) : e.distanceTo(a.shooterStartPos) >= 40 && (a.reel = !0, T[a.shooterid].isFishing = !1)
                }
                if (a.position.y < 10) {
                    let t = !1;
                    (a.position.y < 0 || t) && (a.reel || "" === a.shooterid || void 0 === T[a.shooterid] || !0 === T[a.shooterid].use || 0 === T[a.shooterid].activeWeapon || a.position.x > e.worldsize || a.position.z > e.worldsize || a.position.x < 0 || a.position.z < 0 ? (a.impact && (a.impact.destroy = !0), ht(a)) : (a.velocity.x = 0, a.velocity.z = 0, u && a.shooterid === u.id && Rt.playAudioFile(!1, !1, 1, "fishing"), T[a.shooterid].isFishing = !0))
                }
            })(t, this)
        }
        clientlogic(e) {
            ((e, t) => {
                let a = T[t.shooterid],
                    o = new THREE.Box3;
                if ((void 0 === a || a && a.parent && a.parent.hp <= 0) && (f.remove(t.geometry), void 0 !== t.line && (f.remove(t.line), t.line.geometry.dispose())), a && !0 === t.setProjectileModel) {
                    if (f.remove(t.geometry), 0 === a.activeWeapon) t.geometry = new THREE.Sprite(he.cannonball);
                    else if (1 === a.activeWeapon) {
                        t.baseGeometry = me.plane, t.baseMaterial = he.hook;
                        let e = me.line.clone();
                        e.vertices.push(t.startPoint), e.vertices.push(t.endPoint), t.line = new THREE.Line(e, new THREE.MeshBasicMaterial({
                            color: 0
                        })), D[t.id] = t.line, t.line.frustumCulled = !1, T[t.shooterid].weapon && (o.setFromObject(T[t.shooterid].weapon), t.startPoint.set(o.max.x - .5, o.max.y, o.max.z - .5)), f.add(t.line), t.geometry = new THREE.Mesh(t.baseGeometry, t.baseMaterial), t.geometry.rotation.x = Math.PI
                    }
                    L[t.id] = t.geometry, t.geometry.renderOrder = 16, f.add(t.geometry), t.setProjectileModel = !1
                }
                if (t.geometry.position.set(t.position.x, t.position.y, t.position.z), t.line) a && a.weapon && (o.setFromObject(T[t.shooterid].weapon), t.startPoint.set(o.max.x - .5, o.max.y, o.max.z - .5)), t.endPoint.set(t.position.x, t.position.y + .8, t.position.z), t.line.geometry.verticesNeedUpdate = !0, t.geometry.rotation.y += 1.5 * e;
                else if (a && 0 === a.activeWeapon && (t.particletimer -= e, t.particletimer < 0)) {
                    let e = u && t.shooterid === u.id,
                        a = u && u.parent && u.parent.children[t.shooterid];
                    t.particletimer = .04, kt({
                        vx: 0,
                        vy: 0,
                        vz: 0,
                        x: t.position.x,
                        z: t.position.z,
                        y: t.position.y,
                        w: e ? .7 : .4,
                        h: e ? .7 : .4,
                        d: e ? .7 : .4,
                        gravity: 0,
                        duration: 2,
                        rotaSpeed: 5 * Math.random(),
                        sizeSpeed: -1.8,
                        material: e ? he.smoke_player : a ? he.smoke_friendly : he.smoke_enemy,
                        geometry: me.box
                    })
                }
            })(e, this)
        }
        parseTypeSnap(e) {
            ((e, t) => {
                void 0 !== e.vx && (t.velocity.x = parseFloat(e.vx)), void 0 !== e.vy && (t.velocity.y = parseFloat(e.vy)), void 0 !== e.vz && (t.velocity.z = parseFloat(e.vz)), void 0 !== e.x && (t.position.x = parseFloat(e.x)), void 0 !== e.z && (t.position.z = parseFloat(e.z)), void 0 !== e.y && (t.position.y = parseFloat(e.y)), void 0 !== e.i && e.i !== t.shooterid && (t.shooterid = e.i), void 0 !== e.r && e.r !== t.reel && (t.reel = Te(e.r)), void 0 !== e.sx && (t.shooterStartPos.x = parseFloat(e.sx)), void 0 !== e.sz && (t.shooterStartPos.z = parseFloat(e.sz))
            })(e, this)
        }
    }
    let $t = {
            promises: [],
            loadModel: e => ($t.promises.push(new Promise(((t, a) => {
                ne.load(e, (a => {
                    R[e.substring(e.lastIndexOf("/") + 1, e.length).replace(/\.[^/.]+$/, "")] = a, t()
                }))
            }))), $t.promises[$t.promises.length - 1]),
            loadTexture: e => {
                $t.promises.push(new Promise(((t, a) => {
                    let o = e.split("/").pop().split("."),
                        i = o.pop(),
                        s = o.pop();
                    if ("tga" !== i) {
                        if ("mtl" === i) {
                            let a = e.split("/");
                            return a.pop(), a = `${a.join("/")}/`, de.setPath(a), void de.load(`${s}.${i}`, (e => {
                                e.preload(), ne.setMaterials(e), t()
                            }))
                        }
                        re.load(e, (a => {
                            F[e.substring(e.lastIndexOf("/") + 1, e.length).replace(/\.[^/.]+$/, "")] = a, t()
                        }), (e => {}))
                    } else le.load(e, (e => {
                        F[s] = e, t()
                    }))
                })))
            },
            loadObjWithMtl: e => {
                let t = new THREE.OBJLoader,
                    a = new THREE.MTLLoader,
                    o = e.split("/"),
                    i = o.pop().split("."),
                    s = (i.pop(), i.pop());
                return o = `${o.join("/")}/`, $t.promises.push(new Promise(((i, r) => {
                    a.setPath(o), a.load(`${s}.mtl`, (a => {
                        a.preload(), t.setMaterials(a), t.load(e, (t => {
                            R[e.substring(e.lastIndexOf("/") + 1, e.length).replace(/\.[^/.]+$/, "")] = t, i()
                        }))
                    }))
                }))), $t.promises[$t.promises.length - 1]
            },
            onFinish: e => {
                Promise.all($t.promises).then((t => {
                    e && e()
                }))
            }
        },
        kt = function(e) {
            !u || !u.parent || Math.pow(e.x - u.parent.position.x, 2) + Math.pow(e.z - u.parent.position.z, 2) > 1e4 || j.push(new Et(e))
        };
    class Et {
        constructor(e) {
            this.vx = e.vx, this.vy = e.vy, this.vz = e.vz, this.gravity = e.gravity, this.rotaSpeed = e.rotaSpeed, this.duration = e.duration, this.timeleft = this.duration, this.sizeSpeed = e.sizeSpeed, this.globalscale = 1, this.w = e.w, this.h = e.h, this.d = e.d, this.x = e.x, this.y = e.y, this.z = e.z, this.geometry = new THREE.Mesh(e.geometry, e.material), this.geometry.position.set(e.x, e.y, e.z), this.geometry.scale.set(e.w, e.h, e.d), this.geometry.renderOrder = 24, this.deleteMe = !1, f.add(this.geometry)
        }
        tick(e) {
            this.vy -= this.gravity * e, this.geometry.position.set(this.geometry.position.x + this.vx * e, this.geometry.position.y + this.vy * e, this.geometry.position.z + this.vz * e), this.geometry.rotation.set(this.geometry.rotation.x + this.rotaSpeed * e, this.geometry.rotation.y + this.rotaSpeed * e, this.geometry.rotation.z + this.rotaSpeed * e), this.globalscale += this.sizeSpeed * e, this.geometry.scale.set(this.w * this.globalscale, this.h * this.globalscale, this.d * this.globalscale), this.timeleft -= e, (this.timeleft <= 0 || this.globalscale <= 0) && (f.remove(this.geometry), this.deleteMe = !0)
        }
    }
    let xt = () => {
            let e = function(e, t) {
                THREE.Mesh.call(this, e);
                let a = this,
                    o = void 0 !== (t = t || {}).textureWidth ? t.textureWidth : 512,
                    i = void 0 !== t.textureHeight ? t.textureHeight : 512,
                    s = void 0 !== t.clipBias ? t.clipBias : 0,
                    r = void 0 !== t.alpha ? t.alpha : 1,
                    n = void 0 !== t.time ? t.time : 0,
                    l = void 0 !== t.waterNormals ? t.waterNormals : null,
                    d = void 0 !== t.sunDirection ? t.sunDirection : new THREE.Vector3(.70707, .70707, 0),
                    c = new THREE.Color(void 0 !== t.sunColor ? t.sunColor : 16777215),
                    p = new THREE.Color(void 0 !== t.waterColor ? t.waterColor : 50687),
                    m = void 0 !== t.eye ? t.eye : new THREE.Vector3(0, 0, 0),
                    u = void 0 !== t.distortionScale ? t.distortionScale : 20,
                    g = void 0 !== t.side ? t.side : THREE.FrontSide,
                    b = void 0 !== t.fog && t.fog,
                    y = new THREE.Plane,
                    f = new THREE.Vector3,
                    v = new THREE.Vector3,
                    w = new THREE.Vector3,
                    $ = new THREE.Matrix4,
                    k = new THREE.Vector3(0, 0, -1),
                    E = new THREE.Vector4,
                    x = new THREE.Vector3,
                    C = new THREE.Vector3,
                    T = new THREE.Vector4,
                    S = new THREE.Matrix4;
                h = new THREE.PerspectiveCamera;
                let M = {
                        minFilter: THREE.LinearFilter,
                        magFilter: THREE.LinearFilter,
                        format: THREE.RGBFormat,
                        stencilBuffer: !1
                    },
                    I = new THREE.WebGLRenderTarget(o, i, M);
                !Math.log2(o) % 1 != 0 && !Math.log2(i) % 1 != 0 || (I.texture.generateMipmaps = !1);
                let R = {
                        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
                            normalSampler: {
                                value: null
                            },
                            mirrorSampler: {
                                value: null
                            },
                            alpha: {
                                value: 1
                            },
                            time: {
                                value: 0
                            },
                            size: {
                                value: 1
                            },
                            distortionScale: {
                                value: 20
                            },
                            textureMatrix: {
                                value: new THREE.Matrix4
                            },
                            sunColor: {
                                value: new THREE.Color(8355711)
                            },
                            sunDirection: {
                                value: new THREE.Vector3(0, .70707, .70707)
                            },
                            eye: {
                                value: new THREE.Vector3
                            },
                            waterColor: {
                                value: new THREE.Color(50687)
                            }
                        }]),
                        vertexShader: ["uniform mat4 textureMatrix;", "uniform float time;", "varying vec4 mirrorCoord;", "varying vec4 worldPosition;", "#include <common>", "#include <fog_pars_vertex>", "#include <shadowmap_pars_vertex>", "#include <logdepthbuf_pars_vertex>", "void main() {", "   mirrorCoord = modelMatrix * vec4( position, 1.0 );", "   worldPosition = mirrorCoord.xyzw;", "   mirrorCoord = textureMatrix * mirrorCoord;", "   vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );", "   gl_Position = projectionMatrix * mvPosition;", "#include <beginnormal_vertex>", "#include <defaultnormal_vertex>", "#include <logdepthbuf_vertex>", "#include <fog_vertex>", "#include <shadowmap_vertex>", "}"].join("\n"),
                        fragmentShader: ["uniform sampler2D mirrorSampler;", "uniform float alpha;", "uniform float time;", "uniform float size;", "uniform float distortionScale;", "uniform sampler2D normalSampler;", "uniform vec3 sunColor;", "uniform vec3 sunDirection;", "uniform vec3 eye;", "uniform vec3 waterColor;", "varying vec4 mirrorCoord;", "varying vec4 worldPosition;", "vec4 getNoise( vec2 uv ) {", "   vec2 uv0 = ( uv / 103.0 ) + vec2(time / 107.0, time / 209.0);", "   vec2 uv1 = uv / 107.0-vec2( time / -199.0, time / 310.0 );", "   vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );", "   vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );", "   vec4 noise = texture2D( normalSampler, uv0 ) +", "       texture2D( normalSampler, uv1 ) +", "       texture2D( normalSampler, uv2 ) +", "       texture2D( normalSampler, uv3 );", "   return noise * 0.5 - 1.0;", "}", "void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {", "   vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );", "   float direction = max( 0.0, dot( eyeDirection, reflection ) );", "   specularColor += pow( direction, shiny ) * sunColor * spec;", "   diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;", "}", "#include <common>", "#include <packing>", "#include <bsdfs>", "#include <fog_pars_fragment>", "#include <logdepthbuf_pars_fragment>", "#include <lights_pars_begin>", "#include <shadowmap_pars_fragment>", "#include <shadowmask_pars_fragment>", "void main() {", "#include <logdepthbuf_fragment>", "   vec4 noise = getNoise( worldPosition.xz * size );", "   vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );", "   vec3 diffuseLight = vec3(0.0);", "   vec3 specularLight = vec3(0.0);", "   vec3 worldToEye = eye-worldPosition.xyz;", "   vec3 eyeDirection = normalize( worldToEye );", "   sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );", "   float distance = length(worldToEye);", "   vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;", "   vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );", "   float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );", "   float rf0 = 0.3;", "   float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );", "   vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;", "   vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);", "   vec3 outgoingLight = albedo;", "   gl_FragColor = vec4( outgoingLight, alpha );", "#include <tonemapping_fragment>", "#include <fog_fragment>", "}"].join("\n")
                    },
                    z = new THREE.ShaderMaterial({
                        fragmentShader: R.fragmentShader,
                        vertexShader: R.vertexShader,
                        uniforms: THREE.UniformsUtils.clone(R.uniforms),
                        lights: !0,
                        side: g,
                        fog: b
                    });
                z.uniforms.mirrorSampler.value = I.texture, z.uniforms.textureMatrix.value = S, z.uniforms.alpha.value = r, z.uniforms.time.value = n, z.uniforms.normalSampler.value = l, z.uniforms.sunColor.value = c, z.uniforms.waterColor.value = p, z.uniforms.sunDirection.value = d, z.uniforms.distortionScale.value = u, z.uniforms.eye.value = m, a.material = z, a.onBeforeRender = function(e, t, o) {
                    if (v.setFromMatrixPosition(a.matrixWorld), w.setFromMatrixPosition(o.matrixWorld), $.extractRotation(a.matrixWorld), f.set(0, 0, 1), f.applyMatrix4($), x.subVectors(v, w), x.dot(f) > 0) return;
                    x.reflect(f).negate(), x.add(v), $.extractRotation(o.matrixWorld), k.set(0, 0, -1), k.applyMatrix4($), k.add(w), C.subVectors(v, k), C.reflect(f).negate(), C.add(v), h.position.copy(x), h.up.set(0, 1, 0), h.up.applyMatrix4($), h.up.reflect(f), h.lookAt(C), h.far = o.far, h.updateMatrixWorld(), h.projectionMatrix.copy(o.projectionMatrix), S.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), S.multiply(h.projectionMatrix), S.multiply(h.matrixWorldInverse), y.setFromNormalAndCoplanarPoint(f, v), y.applyMatrix4(h.matrixWorldInverse), E.set(y.normal.x, y.normal.y, y.normal.z, y.constant);
                    let i = h.projectionMatrix;
                    if (T.x = (Math.sign(E.x) + i.elements[8]) / i.elements[0], T.y = (Math.sign(E.y) + i.elements[9]) / i.elements[5], T.z = -1, T.w = (1 + i.elements[10]) / i.elements[14], E.multiplyScalar(2 / E.dot(T)), i.elements[2] = E.x, i.elements[6] = E.y, i.elements[10] = E.z + 1 - s, i.elements[14] = E.w, m.setFromMatrixPosition(o.matrixWorld), e.outputEncoding !== THREE.LinearEncoding) return console.warn("THREE.Water: WebGLRenderer must use LinearEncoding as outputEncoding."), void(a.onBeforeRender = function() {});
                    if (e.toneMapping !== THREE.NoToneMapping) return console.warn("THREE.Water: WebGLRenderer must use NoToneMapping as toneMapping."), void(a.onBeforeRender = function() {});
                    let r = e.getRenderTarget(),
                        n = e.shadowMap.autoUpdate;
                    a.visible = !1, e.shadowMap.autoUpdate = !1, e.setRenderTarget(I), e.state.buffers.depth.setMask(!0), !1 === e.autoClear && e.clear(), e.render(t, h), a.visible = !0, e.shadowMap.autoUpdate = n, e.setRenderTarget(r)
                }
            };
            return (e.prototype = Object.create(THREE.Mesh.prototype)).constructor = e, e
        },
        Ct = () => {
            S.boundaryLeft = new THREE.Mesh(me.box, he.boundary), S.boundaryLeft.position.set(.5 * e.worldsize, 1.5, 0), S.boundaryLeft.scale.set(e.worldsize, .1, 3), f.add(S.boundaryLeft), S.boundaryRight = new THREE.Mesh(me.box, he.boundary), S.boundaryRight.position.set(.5 * e.worldsize, 1.5, e.worldsize), S.boundaryRight.scale.set(e.worldsize, .1, 3), f.add(S.boundaryRight), S.boundaryUp = new THREE.Mesh(me.box, he.boundary), S.boundaryUp.position.set(0, 1.5, .5 * e.worldsize), S.boundaryUp.scale.set(3, .1, e.worldsize), f.add(S.boundaryUp), S.boundaryDown = new THREE.Mesh(me.box, he.boundary), S.boundaryDown.position.set(e.worldsize, 1.5, .5 * e.worldsize), S.boundaryDown.scale.set(3, .1, e.worldsize), f.add(S.boundaryDown)
        },
        Tt = e => {
            if (!x || x && window.currentTime === e) return;
            let t = {
                    r: 0,
                    g: 197,
                    b: 255
                },
                a = {
                    r: 0,
                    g: 36,
                    b: 112
                },
                o = {
                    r: 125,
                    g: 232,
                    b: 255
                },
                s = {
                    r: 21,
                    g: 35,
                    b: 69
                };
            if (window.currentTime = e, 1 === e) {
                let e = 0,
                    r = setInterval((() => {
                        e++, m.intensity -= .02, i.material.color.set(Ee(t, a, e / 100)), c.material.color.set(Ee(t, a, e / 100)), x.parent.fog.color.set(Ee(o, s, e / 100)), f.background = new THREE.Color(Ee(o, s, e / 100)), 100 === e && clearInterval(r)
                    }), 20)
            } else if (0 === e) {
                let e = 0,
                    r = setInterval((() => {
                        e++, m.intensity += .02, i.material.color.set(Ee(a, t, e / 100)), c.material.color.set(Ee(a, t, e / 100)), x.parent.fog.color.set(Ee(s, o, e / 100)), f.background = new THREE.Color(Ee(s, o, e / 100)), 100 === e && clearInterval(r)
                    }), 20)
            }
        },
        St = () => {
            let e = performance.now();
            $t.loadModel("./assets/models/dogs/models/seadog.obj"), $t.loadModel("./assets/models/dogs/models/shibainu.obj"), $t.loadModel("./assets/models/dogs/models/arcticwolf.obj"), $t.loadModel("./assets/models/dogs/models/seafox.obj"), $t.loadModel("./assets/models/dogs/models/krewmate.obj"), $t.loadModel("./assets/models/dogs/models/skeleton.obj"), $t.loadModel("./assets/models/dogs/models/commodore.obj");
            for (const [e, t, a] of [
                    ["classic", "floppyEars", "ArcticWolf"],
                    ["classic", "floppyEars", "Seafox"],
                    ["classic", "raisedEars", "Commodore"],
                    ["classic", "raisedEars", "Krewmate"],
                    ["classic", "raisedEars", "Seadog"],
                    ["classic", "raisedEars", "Shibainu"],
                    ["classic", "skeleton", "Skeleton"],
                    ["members", "floppyEars", "Devilcat"],
                    ["members", "floppyEars", "PotatoPrem"],
                    ["members", "floppyEars", "VOID"],
                    ["members", "raisedEars", "BSK"],
                    ["members", "raisedEars", "Headkeeper"],
                    ["members", "raisedEars", "domino"],
                    ["modern", "floppyEars", "Crab"],
                    ["modern", "floppyEars", "DavyJones"],
                    ["modern", "floppyEars", "EpicColor"],
                    ["modern", "floppyEars", "JackSparrow"],
                    ["modern", "floppyEars", "MermaidPrince"],
                    ["modern", "floppyEars", "PirateKing"],
                    ["modern", "floppyEars", "Psychopath"],
                    ["modern", "floppyEars", "Rabbit"],
                    ["modern", "floppyEars", "Sharkman"],
                    ["modern", "floppyEars", "WillTurner"],
                    ["modern", "floppyEars", "Wizard"],
                    ["modern", "floppyEars", "YinYang"],
                    ["modern", "raisedEars", "Alien"],
                    ["modern", "raisedEars", "Cyborg"],
                    ["modern", "raisedEars", "Cyclops"],
                    ["modern", "raisedEars", "Demon"],
                    ["modern", "raisedEars", "Dragon"],
                    ["modern", "raisedEars", "Ghost"],
                    ["modern", "raisedEars", "Werewolf"],
                    ["modern", "raisedEars", "Zombie"],
                    ["staff", "floppyEars", "63_racer"],
                    ["staff", "floppyEars", "BLADE"],
                    ["staff", "floppyEars", "DamienVesper"],
                    ["staff", "floppyEars", "MrGoat"],
                    ["staff", "floppyEars", "Nemesis"],
                    ["staff", "floppyEars", "Sjmun"],
                    ["staff", "floppyEars", "chocomilk"],
                    ["staff", "floppyEars", "devclied"],
                    ["staff", "floppyEars", "oventes"],
                    ["staff", "floppyEars", "xTangox"],
                    ["staff", "raisedEars", "Fiftyyyyy"],
                    ["staff", "raisedEars", "Jeffry15"],
                    ["staff", "raisedEars", "Kekmw"],
                    ["staff", "raisedEars", "Sloth"],
                    ["staff", "raisedEars", "Stendo"],
                    ["staff", "raisedEars", "TheChoco"]
                ]) $t.loadTexture(`./assets/models/dogs/textures/${e}/${a}.tga`);
            $t.loadObjWithMtl("./assets/models/hats/pirateHat.obj"), $t.loadObjWithMtl("./assets/models/hats/sailorHat.obj"), $t.loadObjWithMtl("./assets/models/hats/shipMasterHat.obj"), $t.loadModel("./assets/models/islands/island.obj"), $t.loadTexture("./assets/models/islands/island.png"), $t.loadObjWithMtl("./assets/models/pickups/shell.obj"), $t.loadObjWithMtl("./assets/models/pickups/crab.obj"), $t.loadObjWithMtl("./assets/models/pickups/clam.obj"), $t.loadObjWithMtl("./assets/models/pickups/chest.obj"), $t.loadTexture("./assets/models/pickups/crate.jpg"), $t.loadObjWithMtl("./assets/models/pickups/fish.obj"), $t.loadTexture("./assets/models/projectiles/cannonball.png"), $t.loadTexture("./assets/models/projectiles/hook.png"), $t.loadObjWithMtl("./assets/models/ships/raft/raft.obj"), $t.loadObjWithMtl("./assets/models/ships/boat/boat.obj"), $t.loadObjWithMtl("./assets/models/ships/trader/trader.obj"), $t.loadObjWithMtl("./assets/models/ships/destroyer/destroyer.obj"), $t.loadObjWithMtl("./assets/models/ships/babyFancy/babyFancy.obj"), $t.loadObjWithMtl("./assets/models/ships/royalFortune/royalFortune.obj"), $t.loadObjWithMtl("./assets/models/ships/calmSpirit/calmSpirit.obj"), $t.loadObjWithMtl("./assets/models/ships/junkie/junkie.obj"), $t.loadObjWithMtl("./assets/models/ships/raider/raider.obj"), $t.loadObjWithMtl("./assets/models/ships/queenBarbsJustice/queenBarbsJustice.obj"), $t.loadObjWithMtl("./assets/models/ships/blackOyster/blackOyster.obj"), $t.loadObjWithMtl("./assets/models/ships/fortuneTrader/fortuneTrader.obj"), $t.loadObjWithMtl("./assets/models/ships/nightWind/nightWind.obj"), $t.loadObjWithMtl("./assets/models/tools/cannon.obj"), $t.loadModel("./assets/models/tools/fishingrod.obj"), $t.loadTexture("./assets/models/tools/fishingrod.tga"), $t.loadObjWithMtl("./assets/models/tools/spyglass.obj"), $t.loadObjWithMtl("./assets/models/misc/lostTreasure.obj"), $t.loadTexture("./assets/models/misc/water.jpg"), $t.loadTexture("./assets/models/misc/wave.png"), $t.onFinish((() => {
                Mt(), It(), zt(), J = !0, console.log(`\nLoaded all models in ${Math.round(1e3*(performance.now()-e))/1e3}ms\n\n`), $("#play-btn").text("Play").attr("disabled", !1), ze.getCookie("username") && ze.getCookie("token") ? (ze.username = ze.getCookie("username"), Pe()) : $.get(`${window.location.href.replace(/\?.*/,"").replace(/#.*/,"").replace(/\/$/,"")}/auth/authenticated`).then((e => {
                    if ($.ajax({
                            url: "/auth/account_game_settings",
                            type: "GET",
                            success: e => {
                                e.fpMode ? ($("#account-fp-mode-button").prop("checked", !0), $("#fp-mode-button").prop("checked", !0)) : ($("#account-fp-mode-button").prop("checked", !1), $("#fp-mode-button").prop("checked", !1)), $("#account-fov-control").val(e.fov ?? 10), $("#fov-control").val(e.fov ?? 10), $("#account-music-control").val(e.musicVolume ?? 50), $("#music-control").val(e.musicVolume ?? 50), $("#account-sfx-control").val(e.sfxVolume ?? 50), $("#sfx-control").val(e.sfxVolume ?? 50), e.viewSails ? ($("#account-view-sails-button").prop("checked", !0), $("#view-sails-button").prop("checked", !0), Y = !0) : ($("#account-view-sails-button").prop("checked", !1), $("#view-sails-button").prop("checked", !1), Y = !1), $("#account-quality-list").val(e.qualityMode ?? 2), $("#quality-list").val(e.qualityMode ?? 2), e.errors || $("#account-game-settings-save-notice").removeClass("hidden"), $("#fp-mode-button").is(":checked") ? $("#fp-mode-text").removeClass("lock-text-info").addClass("lock-text-error").text("FP Camera (Enabled)") : $("#fp-mode-text").removeClass("lock-text-error").addClass("lock-text-info").text("FP Camera (Disabled)"), $("#view-sails-button").is(":checked") ? $("#view-sails-text").removeClass("lock-text-info").addClass("lock-text-error").text("View Sails (Enabled)") : $("#view-sails-text").removeClass("lock-text-error").addClass("lock-text-info").text("View Sails (Disabled)"), _ = document.getElementById("fov-control").value >= 10 && document.getElementById("fov-control").value <= 100 ? document.getElementById("fov-control").value / 10 : 1, Rt.updateMusicVolume(), fe()
                            },
                            error: e => {
                                $("#account-fp-mode-button").prop("checked", !1), $("#fp-mode-button").prop("checked", !1), $("#account-fov-control").val(10), $("#fov-control").val(10), $("#account-music-control").val(50), $("#music-control").val(50), $("#account-sfx-control").val(50), $("#sfx-control").val(50), $("#account-quality-list").val(2), $("#quality-list").val(2), $("#account-view-sails-button").prop("checked", !1), $("#view-sails-button").prop("checked", !1), Y = !1, $("#fp-mode-button").is(":checked") ? $("#fp-mode-text").removeClass("lock-text-info").addClass("lock-text-error").text("FP Camera (Enabled)") : $("#fp-mode-text").removeClass("lock-text-error").addClass("lock-text-info").text("FP Camera (Disabled)"), $("#view-sails-button").is(":checked") ? $("#view-sails-text").removeClass("lock-text-info").addClass("lock-text-error").text("View Sails (Enabled)") : $("#view-sails-text").removeClass("lock-text-error").addClass("lock-text-info").text("View Sails (Disabled)"), _ = document.getElementById("fov-control").value >= 10 && document.getElementById("fov-control").value <= 100 ? document.getElementById("fov-control").value / 10 : 1, Rt.updateMusicVolume(), fe()
                            }
                        }), ze.username = e.isLoggedIn ? e.username : void 0, ze.password = e.isLoggedIn ? e.password : void 0, $("#login-btn").attr("hidden", !1), void 0 === ze.username && ($("#login-btn").on("click", (() => {
                            $("#login-box").modal("show")
                        })), $("#open-register").on("click", (() => {
                            $("#login-box").modal("hide"), $("#register-box").modal("show"), $("#register-error").addClass("hidden")
                        })), $("#open-login").on("click", (() => {
                            $("#register-box").modal("hide"), $("#login-box").modal("show"), $("#login-error").addClass("hidden")
                        })), $("#open-reset-password").on("click", (() => {
                            $("#login-box").modal("hide"), $("#reset-password-box").modal("show"), $("#reset-password-error").addClass("hidden")
                        })), $("#submit-login").on("click", (e => {
                            e.preventDefault(), $("#submit-login").attr("disabled", !0), $("#login-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/login",
                                data: $("#login-form").serialize()
                            }).then((e => e.errors ? ($("#submit-login").attr("disabled", !1), $("#login-error").removeClass("hidden"), $("#login-err-msg").text(e.errors), !1) : e.success ? ($("#submit-login").attr("disabled", !1), $("#login-box").modal("hide"), window.location.reload(), !0) : void 0))
                        })), $("#submit-register").on("click", (e => {
                            e.preventDefault(), $("#submit-register").attr("disabled", !0), $("#register-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/register",
                                data: $("#register-form").serialize()
                            }).then((e => {
                                if (e.errors) return $("#submit-register").attr("disabled", !1), $("#register-error").removeClass("hidden"), $("#register-err-msg").text(e.errors), grecaptcha.reset(), !1;
                                if (e.success) {
                                    if ($("#submit-register").attr("disabled", !1), $("#register-box").modal("hide"), navigator.credentials) {
                                        let e = new PasswordCredential($("#register-form"));
                                        navigator.credentials.store(e)
                                    }
                                    return window.location.reload(), !0
                                }
                            }))
                        }))), void 0 !== ze.username) {
                        ze.setCookie("username", e.username, 1), ze.setCookie("password", e.password, 1), Pe(), $("#settings-btn").prop("disabled", !1).prop("hidden", !1), $("#customize-btn").prop("disabled", !1).prop("hidden", !1), $("#logout-btn").prop("disabled", !1).prop("hidden", !1), $("#login-btn").prop("disabled", !0).prop("hidden", !0), $("#settings-btn").on("click", (() => {
                            $("#manage-account-box").modal("show")
                        })), $("#username-edit-button").on("click", (() => {
                            $("#change-username").removeClass("hidden"), $("#change-username-error").addClass("hidden"), $("#change-username-button-container").addClass("hidden"), $("#change-email").addClass("hidden"), $("#change-email-error").addClass("hidden"), $("#change-email-button-container").removeClass("hidden"), $("#change-account-game-settings").addClass("hidden"), $("#change-account-game-settings-error").addClass("hidden"), $("#change-account-game-settings-button-container").removeClass("hidden"), $("#change-default-krew-name").addClass("hidden"), $("#change-default-krew-name-error").addClass("hidden"), $("#change-default-krew-name-button-container").removeClass("hidden")
                        })), $("#email-edit-button").on("click", (() => {
                            $("#change-username").addClass("hidden"), $("#change-username-error").addClass("hidden"), $("#change-username-button-container").removeClass("hidden"), $("#change-email").removeClass("hidden"), $("#change-email-error").addClass("hidden"), $("#change-email-button-container").addClass("hidden"), $("#change-account-game-settings").addClass("hidden"), $("#change-account-game-settings-error").addClass("hidden"), $("#change-account-game-settings-button-container").removeClass("hidden"), $("#change-default-krew-name").addClass("hidden"), $("#change-default-krew-name-error").addClass("hidden"), $("#change-default-krew-name-button-container").removeClass("hidden")
                        })), $("#change-account-game-settings-button").on("click", (() => {
                            $("#change-username").addClass("hidden"), $("#change-username-error").addClass("hidden"), $("#change-username-button-container").removeClass("hidden"), $("#change-email").addClass("hidden"), $("#change-email-error").addClass("hidden"), $("#change-email-button-container").removeClass("hidden"), $("#change-account-game-settings").removeClass("hidden"), $("#change-account-game-settings-error").addClass("hidden"), $("#change-account-game-settings-button-container").addClass("hidden"), $("#change-default-krew-name").addClass("hidden"), $("#change-default-krew-name-error").addClass("hidden"), $("#change-default-krew-name-button-container").removeClass("hidden")
                        })), $("#change-default-krew-name-button").on("click", (() => {
                            $("#change-username").addClass("hidden"), $("#change-username-error").addClass("hidden"), $("#change-username-button-container").removeClass("hidden"), $("#change-email").addClass("hidden"), $("#change-email-error").addClass("hidden"), $("#change-email-button-container").removeClass("hidden"), $("#change-account-game-settings").addClass("hidden"), $("#change-account-game-settings-error").addClass("hidden"), $("#change-account-game-settings-button-container").removeClass("hidden"), $("#change-default-krew-name").removeClass("hidden"), $("#change-default-krew-name-error").addClass("hidden"), $("#change-default-krew-name-button-container").addClass("hidden")
                        })), $("#customize-btn").on("click", (() => {
                            $("#customization-box").modal("show"), $("#customization-error").addClass("hidden")
                        })), $("#customization-button-2").on("click", (() => {
                            $("#manage-account-box").modal("hide"), $("#customization-box").modal("show"), $("#customization-error").addClass("hidden")
                        })), $("#reset-password-button").on("click", (() => {
                            $("#manage-account-box").modal("hide"), $("#reset-password-box").modal("show"), $("#reset-password-error").addClass("hidden")
                        })), $("#delete-account-button").on("click", (() => {
                            $("#manage-account-box").modal("hide"), $("#delete-account-box").modal("show"), $("#delete-account-error").addClass("hidden")
                        })), $("#submit-change-username").on("click", (e => {
                            e.preventDefault(), $("#submit-change-username").attr("disabled", !0), $("#change-username-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/change_username",
                                data: $("#change-username-form").serialize()
                            }).then((e => e.errors ? ($("#submit-change-username").attr("disabled", !1), $("#change-username-error").removeClass("hidden"), $("#change-username-err-msg").text(e.errors), !1) : e.success ? (window.location.reload(), !0) : void 0))
                        })), $("#submit-change-email").on("click", (e => {
                            e.preventDefault(), $("#submit-change-email").attr("disabled", !0), $("#change-email-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/change_email",
                                data: $("#change-email-form").serialize()
                            }).then((e => e.errors ? ($("#submit-change-email").attr("disabled", !1), $("#change-email-error").removeClass("hidden"), $("#change-email-err-msg").text(e.errors), !1) : e.success ? (window.location.reload(), !0) : void 0))
                        })), $("#submit-change-account-game-settings").on("click", (e => {
                            e.preventDefault(), $("#submit-change-account-game-settings").attr("disabled", !0), $("#change-account-game-settings-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/change_account_game_settings",
                                data: $("#change-account-game-settings-form").serialize()
                            }).then((e => e.errors ? ($("#submit-change-account-game-settings").attr("disabled", !1), $("#change-account-game-settings-error").removeClass("hidden"), $("#change-account-game-settings-err-msg").text(e.errors), !1) : e.success ? (window.location.reload(), !0) : void 0))
                        })), $("#submit-change-default-krew-name").on("click", (e => {
                            e.preventDefault(), $("#submit-change-default-krew-name").attr("disabled", !0), $("#change-default-krew-name-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/change_default_krew_name",
                                data: $("#change-default-krew-name-form").serialize()
                            }).then((e => e.errors ? ($("#submit-change-default-krew-name").attr("disabled", !1), $("#change-default-krew-name-error").removeClass("hidden"), $("#change-default-krew-name-err-msg").text(e.errors), !1) : e.success ? (window.location.reload(), !0) : void 0))
                        }));
                        let t = 0;
                        $("#hat-model-left").on("click", (() => {
                            t--, t < 0 && (t = 2), $("#hat-model-image").attr("src", `/assets/img/hats/hat${t}.png`)
                        })), $("#hat-model-right").on("click", (() => {
                            t++, t > 2 && (t = 0), $("#hat-model-image").attr("src", `/assets/img/hats/hat${t}.png`)
                        }));
                        let a = 0;
                        $("#player-model-image").attr("src", "/assets/img/dogs/classic/floppyEars/ArcticWolf.png"), $("#player-model-left").on("click", (() => {
                            a--, a < 0 && (a = [
                                ["classic", "floppyEars", "ArcticWolf"],
                                ["classic", "floppyEars", "Seafox"],
                                ["classic", "raisedEars", "Commodore"],
                                ["classic", "raisedEars", "Krewmate"],
                                ["classic", "raisedEars", "Seadog"],
                                ["classic", "raisedEars", "Shibainu"],
                                ["classic", "skeleton", "Skeleton"],
                                ["members", "floppyEars", "Devilcat"],
                                ["members", "floppyEars", "PotatoPrem"],
                                ["members", "floppyEars", "VOID"],
                                ["members", "raisedEars", "BSK"],
                                ["members", "raisedEars", "Headkeeper"],
                                ["members", "raisedEars", "domino"],
                                ["modern", "floppyEars", "Crab"],
                                ["modern", "floppyEars", "DavyJones"],
                                ["modern", "floppyEars", "EpicColor"],
                                ["modern", "floppyEars", "JackSparrow"],
                                ["modern", "floppyEars", "MermaidPrince"],
                                ["modern", "floppyEars", "PirateKing"],
                                ["modern", "floppyEars", "Psychopath"],
                                ["modern", "floppyEars", "Rabbit"],
                                ["modern", "floppyEars", "Sharkman"],
                                ["modern", "floppyEars", "WillTurner"],
                                ["modern", "floppyEars", "Wizard"],
                                ["modern", "floppyEars", "YinYang"],
                                ["modern", "raisedEars", "Alien"],
                                ["modern", "raisedEars", "Cyborg"],
                                ["modern", "raisedEars", "Cyclops"],
                                ["modern", "raisedEars", "Demon"],
                                ["modern", "raisedEars", "Dragon"],
                                ["modern", "raisedEars", "Ghost"],
                                ["modern", "raisedEars", "Werewolf"],
                                ["modern", "raisedEars", "Zombie"],
                                ["staff", "floppyEars", "63_racer"],
                                ["staff", "floppyEars", "BLADE"],
                                ["staff", "floppyEars", "DamienVesper"],
                                ["staff", "floppyEars", "MrGoat"],
                                ["staff", "floppyEars", "Nemesis"],
                                ["staff", "floppyEars", "Sjmun"],
                                ["staff", "floppyEars", "chocomilk"],
                                ["staff", "floppyEars", "devclied"],
                                ["staff", "floppyEars", "oventes"],
                                ["staff", "floppyEars", "xTangox"],
                                ["staff", "raisedEars", "Fiftyyyyy"],
                                ["staff", "raisedEars", "Jeffry15"],
                                ["staff", "raisedEars", "Kekmw"],
                                ["staff", "raisedEars", "Sloth"],
                                ["staff", "raisedEars", "Stendo"],
                                ["staff", "raisedEars", "TheChoco"]
                            ].length - 1);
                            const [e, t, o] = [
                                ["classic", "floppyEars", "ArcticWolf"],
                                ["classic", "floppyEars", "Seafox"],
                                ["classic", "raisedEars", "Commodore"],
                                ["classic", "raisedEars", "Krewmate"],
                                ["classic", "raisedEars", "Seadog"],
                                ["classic", "raisedEars", "Shibainu"],
                                ["classic", "skeleton", "Skeleton"],
                                ["members", "floppyEars", "Devilcat"],
                                ["members", "floppyEars", "PotatoPrem"],
                                ["members", "floppyEars", "VOID"],
                                ["members", "raisedEars", "BSK"],
                                ["members", "raisedEars", "Headkeeper"],
                                ["members", "raisedEars", "domino"],
                                ["modern", "floppyEars", "Crab"],
                                ["modern", "floppyEars", "DavyJones"],
                                ["modern", "floppyEars", "EpicColor"],
                                ["modern", "floppyEars", "JackSparrow"],
                                ["modern", "floppyEars", "MermaidPrince"],
                                ["modern", "floppyEars", "PirateKing"],
                                ["modern", "floppyEars", "Psychopath"],
                                ["modern", "floppyEars", "Rabbit"],
                                ["modern", "floppyEars", "Sharkman"],
                                ["modern", "floppyEars", "WillTurner"],
                                ["modern", "floppyEars", "Wizard"],
                                ["modern", "floppyEars", "YinYang"],
                                ["modern", "raisedEars", "Alien"],
                                ["modern", "raisedEars", "Cyborg"],
                                ["modern", "raisedEars", "Cyclops"],
                                ["modern", "raisedEars", "Demon"],
                                ["modern", "raisedEars", "Dragon"],
                                ["modern", "raisedEars", "Ghost"],
                                ["modern", "raisedEars", "Werewolf"],
                                ["modern", "raisedEars", "Zombie"],
                                ["staff", "floppyEars", "63_racer"],
                                ["staff", "floppyEars", "BLADE"],
                                ["staff", "floppyEars", "DamienVesper"],
                                ["staff", "floppyEars", "MrGoat"],
                                ["staff", "floppyEars", "Nemesis"],
                                ["staff", "floppyEars", "Sjmun"],
                                ["staff", "floppyEars", "chocomilk"],
                                ["staff", "floppyEars", "devclied"],
                                ["staff", "floppyEars", "oventes"],
                                ["staff", "floppyEars", "xTangox"],
                                ["staff", "raisedEars", "Fiftyyyyy"],
                                ["staff", "raisedEars", "Jeffry15"],
                                ["staff", "raisedEars", "Kekmw"],
                                ["staff", "raisedEars", "Sloth"],
                                ["staff", "raisedEars", "Stendo"],
                                ["staff", "raisedEars", "TheChoco"]
                            ][a];
                            $("#player-model-image").attr("src", `/assets/img/dogs/${e}/${t}/${o}.png`)
                        })), $("#player-model-right").on("click", (() => {
                            a++, a > [
                                ["classic", "floppyEars", "ArcticWolf"],
                                ["classic", "floppyEars", "Seafox"],
                                ["classic", "raisedEars", "Commodore"],
                                ["classic", "raisedEars", "Krewmate"],
                                ["classic", "raisedEars", "Seadog"],
                                ["classic", "raisedEars", "Shibainu"],
                                ["classic", "skeleton", "Skeleton"],
                                ["members", "floppyEars", "Devilcat"],
                                ["members", "floppyEars", "PotatoPrem"],
                                ["members", "floppyEars", "VOID"],
                                ["members", "raisedEars", "BSK"],
                                ["members", "raisedEars", "Headkeeper"],
                                ["members", "raisedEars", "domino"],
                                ["modern", "floppyEars", "Crab"],
                                ["modern", "floppyEars", "DavyJones"],
                                ["modern", "floppyEars", "EpicColor"],
                                ["modern", "floppyEars", "JackSparrow"],
                                ["modern", "floppyEars", "MermaidPrince"],
                                ["modern", "floppyEars", "PirateKing"],
                                ["modern", "floppyEars", "Psychopath"],
                                ["modern", "floppyEars", "Rabbit"],
                                ["modern", "floppyEars", "Sharkman"],
                                ["modern", "floppyEars", "WillTurner"],
                                ["modern", "floppyEars", "Wizard"],
                                ["modern", "floppyEars", "YinYang"],
                                ["modern", "raisedEars", "Alien"],
                                ["modern", "raisedEars", "Cyborg"],
                                ["modern", "raisedEars", "Cyclops"],
                                ["modern", "raisedEars", "Demon"],
                                ["modern", "raisedEars", "Dragon"],
                                ["modern", "raisedEars", "Ghost"],
                                ["modern", "raisedEars", "Werewolf"],
                                ["modern", "raisedEars", "Zombie"],
                                ["staff", "floppyEars", "63_racer"],
                                ["staff", "floppyEars", "BLADE"],
                                ["staff", "floppyEars", "DamienVesper"],
                                ["staff", "floppyEars", "MrGoat"],
                                ["staff", "floppyEars", "Nemesis"],
                                ["staff", "floppyEars", "Sjmun"],
                                ["staff", "floppyEars", "chocomilk"],
                                ["staff", "floppyEars", "devclied"],
                                ["staff", "floppyEars", "oventes"],
                                ["staff", "floppyEars", "xTangox"],
                                ["staff", "raisedEars", "Fiftyyyyy"],
                                ["staff", "raisedEars", "Jeffry15"],
                                ["staff", "raisedEars", "Kekmw"],
                                ["staff", "raisedEars", "Sloth"],
                                ["staff", "raisedEars", "Stendo"],
                                ["staff", "raisedEars", "TheChoco"]
                            ].length - 1 && (a = 0), a < 0 && (a = [
                                ["classic", "floppyEars", "ArcticWolf"],
                                ["classic", "floppyEars", "Seafox"],
                                ["classic", "raisedEars", "Commodore"],
                                ["classic", "raisedEars", "Krewmate"],
                                ["classic", "raisedEars", "Seadog"],
                                ["classic", "raisedEars", "Shibainu"],
                                ["classic", "skeleton", "Skeleton"],
                                ["members", "floppyEars", "Devilcat"],
                                ["members", "floppyEars", "PotatoPrem"],
                                ["members", "floppyEars", "VOID"],
                                ["members", "raisedEars", "BSK"],
                                ["members", "raisedEars", "Headkeeper"],
                                ["members", "raisedEars", "domino"],
                                ["modern", "floppyEars", "Crab"],
                                ["modern", "floppyEars", "DavyJones"],
                                ["modern", "floppyEars", "EpicColor"],
                                ["modern", "floppyEars", "JackSparrow"],
                                ["modern", "floppyEars", "MermaidPrince"],
                                ["modern", "floppyEars", "PirateKing"],
                                ["modern", "floppyEars", "Psychopath"],
                                ["modern", "floppyEars", "Rabbit"],
                                ["modern", "floppyEars", "Sharkman"],
                                ["modern", "floppyEars", "WillTurner"],
                                ["modern", "floppyEars", "Wizard"],
                                ["modern", "floppyEars", "YinYang"],
                                ["modern", "raisedEars", "Alien"],
                                ["modern", "raisedEars", "Cyborg"],
                                ["modern", "raisedEars", "Cyclops"],
                                ["modern", "raisedEars", "Demon"],
                                ["modern", "raisedEars", "Dragon"],
                                ["modern", "raisedEars", "Ghost"],
                                ["modern", "raisedEars", "Werewolf"],
                                ["modern", "raisedEars", "Zombie"],
                                ["staff", "floppyEars", "63_racer"],
                                ["staff", "floppyEars", "BLADE"],
                                ["staff", "floppyEars", "DamienVesper"],
                                ["staff", "floppyEars", "MrGoat"],
                                ["staff", "floppyEars", "Nemesis"],
                                ["staff", "floppyEars", "Sjmun"],
                                ["staff", "floppyEars", "chocomilk"],
                                ["staff", "floppyEars", "devclied"],
                                ["staff", "floppyEars", "oventes"],
                                ["staff", "floppyEars", "xTangox"],
                                ["staff", "raisedEars", "Fiftyyyyy"],
                                ["staff", "raisedEars", "Jeffry15"],
                                ["staff", "raisedEars", "Kekmw"],
                                ["staff", "raisedEars", "Sloth"],
                                ["staff", "raisedEars", "Stendo"],
                                ["staff", "raisedEars", "TheChoco"]
                            ].length - 1);
                            const [e, t, o] = [
                                ["classic", "floppyEars", "ArcticWolf"],
                                ["classic", "floppyEars", "Seafox"],
                                ["classic", "raisedEars", "Commodore"],
                                ["classic", "raisedEars", "Krewmate"],
                                ["classic", "raisedEars", "Seadog"],
                                ["classic", "raisedEars", "Shibainu"],
                                ["classic", "skeleton", "Skeleton"],
                                ["members", "floppyEars", "Devilcat"],
                                ["members", "floppyEars", "PotatoPrem"],
                                ["members", "floppyEars", "VOID"],
                                ["members", "raisedEars", "BSK"],
                                ["members", "raisedEars", "Headkeeper"],
                                ["members", "raisedEars", "domino"],
                                ["modern", "floppyEars", "Crab"],
                                ["modern", "floppyEars", "DavyJones"],
                                ["modern", "floppyEars", "EpicColor"],
                                ["modern", "floppyEars", "JackSparrow"],
                                ["modern", "floppyEars", "MermaidPrince"],
                                ["modern", "floppyEars", "PirateKing"],
                                ["modern", "floppyEars", "Psychopath"],
                                ["modern", "floppyEars", "Rabbit"],
                                ["modern", "floppyEars", "Sharkman"],
                                ["modern", "floppyEars", "WillTurner"],
                                ["modern", "floppyEars", "Wizard"],
                                ["modern", "floppyEars", "YinYang"],
                                ["modern", "raisedEars", "Alien"],
                                ["modern", "raisedEars", "Cyborg"],
                                ["modern", "raisedEars", "Cyclops"],
                                ["modern", "raisedEars", "Demon"],
                                ["modern", "raisedEars", "Dragon"],
                                ["modern", "raisedEars", "Ghost"],
                                ["modern", "raisedEars", "Werewolf"],
                                ["modern", "raisedEars", "Zombie"],
                                ["staff", "floppyEars", "63_racer"],
                                ["staff", "floppyEars", "BLADE"],
                                ["staff", "floppyEars", "DamienVesper"],
                                ["staff", "floppyEars", "MrGoat"],
                                ["staff", "floppyEars", "Nemesis"],
                                ["staff", "floppyEars", "Sjmun"],
                                ["staff", "floppyEars", "chocomilk"],
                                ["staff", "floppyEars", "devclied"],
                                ["staff", "floppyEars", "oventes"],
                                ["staff", "floppyEars", "xTangox"],
                                ["staff", "raisedEars", "Fiftyyyyy"],
                                ["staff", "raisedEars", "Jeffry15"],
                                ["staff", "raisedEars", "Kekmw"],
                                ["staff", "raisedEars", "Sloth"],
                                ["staff", "raisedEars", "Stendo"],
                                ["staff", "raisedEars", "TheChoco"]
                            ][a];
                            $("#player-model-image").attr("src", `/assets/img/dogs/${e}/${t}/${o}.png`)
                        })), $("#submit-customization").on("click", (e => {
                            e.preventDefault(), $("#submit-customization").attr("disabled", !0), $("#customization-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/customization",
                                data: {
                                    playerModel: a.toString(),
                                    hatModel: t.toString()
                                }
                            }).then((e => e.errors ? ($("#submit-customization").attr("disabled", !1), $("#customization-error").removeClass("hidden"), $("#customization-err-msg").text(e.errors), !1) : e.success ? (window.location.reload(), !0) : void 0))
                        })), $("#submit-delete-account").on("click", (e => {
                            e.preventDefault(), $("#submit-delete-account").attr("disabled", !0), $("#delete-account-error").addClass("hidden"), $.ajax({
                                type: "post",
                                url: "/auth/delete_account",
                                data: $("#delete-account-form").serialize()
                            }).then((e => {
                                if (e.errors) return $("#submit-delete-account").attr("disabled", !1), $("#delete-account-error").removeClass("hidden"), $("#delete-account-err-msg").text(e.errors), !1;
                                e.success && window.location.reload()
                            }))
                        }))
                    }
                    $("#submit-reset-password").on("click", (e => {
                        e.preventDefault(), $("#submit-reset-password").attr("disabled", !0), $("#reset-password-error").addClass("hidden"), $.ajax({
                            type: "post",
                            url: "/auth/reset_password",
                            data: $("#reset-password-form").serialize()
                        }).then((e => e.errors ? ($("#submit-reset-password").attr("disabled", !1), $("#reset-password-error").removeClass("hidden"), $("#reset-password-err-msg").text(e.errors), !1) : e.success ? (window.location.reload(), !0) : void 0))
                    }))
                }))
            }))
        },
        Mt = () => {
            M.island = R.island.children[0].geometry, e.palmTree[0] && (M.palm = R.island.children[1].geometry), M.fishingrod = R.fishingrod.children[0].geometry, M.seadog = R.seadog.children[0].geometry, M.shibainu = R.shibainu.children[0].geometry, M.arcticwolf = R.arcticwolf.children[0].geometry, M.seafox = R.seafox.children[0].geometry, M.krewmate = R.krewmate.children[0].geometry, M.skeleton = R.skeleton.children[0].geometry, M.commodore = R.commodore.children[0].geometry, R.babyFancy.children[0].name = "sail", R.babyFancy.children[1].name = "body", R.babyFancy.children[2].name = "mast", R.blackOyster.children[0].name = "body", R.blackOyster.children[1].name = "mast", R.blackOyster.children[2].name = "sail", R.boat.children[0].name = "sail", R.boat.children[1].name = "mast", R.boat.children[2].name = "body", R.calmSpirit.children[0].name = "body", R.calmSpirit.children[1].name = "mast", R.calmSpirit.children[2].name = "sail", R.destroyer.children[0].name = "mast", R.destroyer.children[1].name = "sail", R.destroyer.children[2].name = "body", R.fortuneTrader.children[0].name = "body", R.fortuneTrader.children[1].name = "mast", R.fortuneTrader.children[2].name = "sail", R.junkie.children[0].name = "body", R.junkie.children[1].name = "sail", R.junkie.children[2].name = "mast", R.queenBarbsJustice.children[0].name = "body", R.queenBarbsJustice.children[1].name = "mast", R.queenBarbsJustice.children[2].name = "sail", R.raft.children[1].name = "body", R.raft.children[2].name = "mast", R.raft.children[0].name = "sail", R.raider.children[0].name = "body", R.raider.children[1].name = "mast", R.raider.children[2].name = "sail", R.royalFortune.children[0].name = "body", R.royalFortune.children[1].name = "mast", R.royalFortune.children[2].name = "sail", R.trader.children[0].name = "body", R.trader.children[1].name = "mast", R.trader.children[2].name = "sail", R.nightWind.children[0].name = "body", R.nightWind.children[1].name = "mast", R.nightWind.children[2].name = "sail", (() => {
                for (let e in t) {
                    let a = t[e];
                    void 0 !== R[a.body] && (a.body = R[a.body].getObjectByName("body")), void 0 !== a.sail && void 0 !== R[a.sail] && (a.sail = R[a.sail].getObjectByName("sail")), void 0 !== a.mast && void 0 !== R[a.mast] && (a.mast = R[a.mast].getObjectByName("mast"))
                }
            })(), (() => {
                for (const [e, t, a] of [
                        ["classic", "floppyEars", "ArcticWolf"],
                        ["classic", "floppyEars", "Seafox"],
                        ["classic", "raisedEars", "Commodore"],
                        ["classic", "raisedEars", "Krewmate"],
                        ["classic", "raisedEars", "Seadog"],
                        ["classic", "raisedEars", "Shibainu"],
                        ["classic", "skeleton", "Skeleton"],
                        ["members", "floppyEars", "Devilcat"],
                        ["members", "floppyEars", "PotatoPrem"],
                        ["members", "floppyEars", "VOID"],
                        ["members", "raisedEars", "BSK"],
                        ["members", "raisedEars", "Headkeeper"],
                        ["members", "raisedEars", "domino"],
                        ["modern", "floppyEars", "Crab"],
                        ["modern", "floppyEars", "DavyJones"],
                        ["modern", "floppyEars", "EpicColor"],
                        ["modern", "floppyEars", "JackSparrow"],
                        ["modern", "floppyEars", "MermaidPrince"],
                        ["modern", "floppyEars", "PirateKing"],
                        ["modern", "floppyEars", "Psychopath"],
                        ["modern", "floppyEars", "Rabbit"],
                        ["modern", "floppyEars", "Sharkman"],
                        ["modern", "floppyEars", "WillTurner"],
                        ["modern", "floppyEars", "Wizard"],
                        ["modern", "floppyEars", "YinYang"],
                        ["modern", "raisedEars", "Alien"],
                        ["modern", "raisedEars", "Cyborg"],
                        ["modern", "raisedEars", "Cyclops"],
                        ["modern", "raisedEars", "Demon"],
                        ["modern", "raisedEars", "Dragon"],
                        ["modern", "raisedEars", "Ghost"],
                        ["modern", "raisedEars", "Werewolf"],
                        ["modern", "raisedEars", "Zombie"],
                        ["staff", "floppyEars", "63_racer"],
                        ["staff", "floppyEars", "BLADE"],
                        ["staff", "floppyEars", "DamienVesper"],
                        ["staff", "floppyEars", "MrGoat"],
                        ["staff", "floppyEars", "Nemesis"],
                        ["staff", "floppyEars", "Sjmun"],
                        ["staff", "floppyEars", "chocomilk"],
                        ["staff", "floppyEars", "devclied"],
                        ["staff", "floppyEars", "oventes"],
                        ["staff", "floppyEars", "xTangox"],
                        ["staff", "raisedEars", "Fiftyyyyy"],
                        ["staff", "raisedEars", "Jeffry15"],
                        ["staff", "raisedEars", "Kekmw"],
                        ["staff", "raisedEars", "Sloth"],
                        ["staff", "raisedEars", "Stendo"],
                        ["staff", "raisedEars", "TheChoco"]
                    ]) {
                    let e;
                    switch (he[a] = new THREE.MeshPhongMaterial({
                            color: 16777215,
                            map: F[a]
                        }), t) {
                        case "floppyEars":
                            e = M.arcticwolf;
                            break;
                        case "skeleton":
                            e = M.skeleton;
                            break;
                        default:
                            e = M.seadog
                    }
                    const o = new THREE.Mesh(e, he[a]);
                    q.push({
                        body: o,
                        scale: new THREE.Vector3(.04, .04, .04),
                        offset: new THREE.Vector3(0, -.4, .8),
                        rotation: new THREE.Vector3(.4, Math.PI, 0)
                    })
                }
            })(), A.push(R.pirateHat), A.push(R.sailorHat), A.push(R.shipMasterHat)
        },
        It = function() {
            he.cannonball = new THREE.SpriteMaterial({
                map: F.cannonball,
                color: 16777215,
                fog: !0
            }), he.fishingrod = new THREE.MeshPhongMaterial({
                color: 16777215,
                map: F.fishingrod
            }), he.island = new THREE.MeshLambertMaterial({
                map: F.island,
                side: THREE.DoubleSide
            }), he.hook = new THREE.MeshLambertMaterial({
                map: F.hook,
                side: THREE.DoubleSide,
                transparent: !0
            }), he.crate = new THREE.MeshLambertMaterial({
                map: F.crate
            }), F.water.wrapS = F.water.wrapT = THREE.RepeatWrapping, F.wave.repeat.set(500, 500), F.wave.wrapT = THREE.RepeatWrapping, F.wave.wrapS = THREE.RepeatWrapping, he.wave = new THREE.MeshBasicMaterial({
                map: F.wave
            })
        },
        Rt = {
            musicPlaying: void 0,
            fadingIn: [],
            fadingOut: [],
            inBattle: !1,
            updateMusicVolume: () => {
                let e = document.querySelectorAll("audio");
                const t = document.getElementById("music-control");
                for (let a = 0; a < e.length; a++) e[a].volume = .1 * t.value / t.max
            },
            playAudioFile: (e, t, a, o) => {
                const i = document.getElementById("music-control"),
                    s = document.getElementById("sfx-control");
                if (document.getElementById(o).loop = e, t) {
                    let t = document.getElementById(o).cloneNode(!0);
                    t.volume = e ? .1 * a * i.value / i.max : .35 * a * s.value / s.max, t.play()
                } else document.getElementById(o).volume = e ? .1 * a * i.value / i.max : .45 * a * s.value / s.max, document.getElementById(o).play()
            },
            stopAudioFile: e => {
                document.getElementById(e).volume = 0, document.getElementById(e).pause()
            },
            fadeAudio: (e, t, a, o, i) => new Promise((s => {
                const r = document.getElementById("music-control"),
                    n = document.getElementById("sfx-control");
                Rt.playAudioFile(o, !1, 0, t);
                let l = 0,
                    d = document.getElementById(e).volume,
                    c = setInterval((() => {
                        l += 50, document.getElementById(t).volume = Math.min(a, o ? a * (l / i) * .1 * r.value / r.max : a * (l / i) * .35 * n.value / n.max), document.getElementById(e).volume = Math.max(0, d * ((i - l) / i)), l >= i && (Rt.stopAudioFile(e), document.getElementById(t).volume = o ? .1 * a * r.value / r.max : .35 * a * n.value / n.max, s(), clearInterval(c))
                    }), 50)
            })),
            changeMusic: async (e, t) => {
                if (t && (Rt.inBattle = !1), !Rt.inBattle) {
                    let t, a;
                    switch (e) {
                        case "battle":
                            Rt.inBattle = !0, a = "battle-music", t = 3;
                            break;
                        case "ocean":
                            Math.random() >= .5 ? (a = "ocean-music", t = 1) : (a = "ocean-music-2", t = 3);
                            break;
                        case "island":
                            Math.random() >= .5 ? (a = "island-music", t = 1) : (a = "island-music-2", t = 4);
                            break;
                        default:
                            return
                    }
                    Rt.fadingIn.push(a), Rt.fadingOut.push(Rt.musicPlaying), await Rt.fadeQueued(a, Rt.musicPlaying), await Rt.fadeAudio(Rt.musicPlaying, a, t, !0, Rt.inBattle ? 2e3 : 4e3), Rt.fadingIn.shift(), Rt.fadingOut.shift(), Rt.musicPlaying = a
                }
            },
            fadeQueued: (e, t) => new Promise((a => {
                let o = setInterval((() => {
                    Rt.fadingIn[0] === e && Rt.fadingOut[0] === t && (a(), clearInterval(o))
                }), 100)
            }))
        },
        zt = () => {
            let t = (() => {
                let t = CanvasMap(document.getElementById("minimap"), e.worldsize, e.worldsize);
                t.useRadians = !0, t.zoom = .9;
                let a = {
                    x: t.text({
                        x: K,
                        y: K,
                        text: "+",
                        fill: "rgba(84,48,13,0.7)",
                        size: 150,
                        baseline: "middle"
                    }),
                    n: t.text({
                        x: K,
                        y: K - 350,
                        text: "N",
                        fill: "rgba(84,48,13,0.7)",
                        size: 160,
                        baseline: "middle"
                    }),
                    s: t.text({
                        x: K,
                        y: K + 350,
                        text: "S",
                        fill: "rgba(84,48,13,0.7)",
                        size: 190,
                        baseline: "middle"
                    }),
                    w: t.text({
                        x: K - 350,
                        y: K,
                        text: "W",
                        fill: "rgba(84,48,13,0.7)",
                        size: 190,
                        baseline: "middle"
                    }),
                    e: t.text({
                        x: K + 350,
                        y: K,
                        text: "E",
                        fill: "rgba(84,48,13,0.7)",
                        size: 190,
                        baseline: "middle"
                    }),
                    boundary: t.rect({
                        x: 0,
                        y: 0,
                        width: e.worldsize,
                        height: e.worldsize,
                        stroke: {
                            color: "rgba(84,48,13,1)",
                            width: 8
                        }
                    })
                };
                return t.add(a.x).add(a.n).add(a.s).add(a.w).add(a.e).add(a.boundary), t.update = () => {
                    if (performance.now() - ce > 1e3 / 24) {
                        if (void 0 === T) t.elements = {};
                        else {
                            for (let e in t.elements) 5 !== t.elements[e].netType && 0 !== t.elements[e].netType && 4 !== t.elements[e].netType || void 0 !== T[e] || t.remove(t.elements[e]);
                            for (let e in T) 5 === T[e].netType && void 0 === t.elements[e] && t.add(t.point({
                                x: T[e].position.x,
                                y: T[e].position.z,
                                r: T[e].dockRadius,
                                fill: "green",
                                id: e,
                                netType: 5
                            })).add(t.text({
                                x: T[e].position.x,
                                y: T[e].position.z - 120,
                                text: T[e].name,
                                fill: "rgba(84,48,13,1)",
                                font: "serif",
                                id: `${e}-label`,
                                size: 180
                            })), 4 === T[e].netType && 4 === T[e].type && void 0 === t.elements[e] && t.add(t.text({
                                x: T[e].position.x,
                                y: T[e].position.z,
                                text: "x",
                                fill: "rgba(204, 10, 10, 1)",
                                font: "sans-serif",
                                id: e,
                                size: 140,
                                netType: 4
                            }));
                            for (let e in I) void 0 === t.elements[e] && t.add(t.point({
                                x: I[e].x,
                                y: I[e].y,
                                r: 30,
                                d: .5,
                                id: e,
                                creatTime: performance.now(),
                                fill: "rgba(255, 0, 0, 0.5)"
                            })), void 0 !== t.elements[e] && (t.elements[e].creatTime < performance.now() - 1e4 ? (t.remove(t.elements[e]), delete I[e]) : (t.elements[e].r = t.elements[e].r + 5 * Math.sin(t.elements[e].d), t.elements[e].d += .2))
                        }
                        if (u && u.geometry) {
                            let e, a = u.geometry.getWorldPosition(new THREE.Vector3),
                                o = new THREE.Quaternion;
                            u.parent && 1 === u.parent.netType && 0 === u.parent.shipState ? (u.parent.geometry.getWorldQuaternion(o), e = 180) : (u.geometry.getWorldQuaternion(o), e = 0);
                            let i = new THREE.Vector3(1, 0, 0).applyQuaternion(o),
                                s = 180 * Math.atan2(i.z, i.x) / Math.PI;
                            s = s > 0 ? s : s + 360;
                            let r = (s % 360 + e) * Math.PI / 180;
                            void 0 === t.elements[u.id] && t.add(t.triangle({
                                x: u.position.x,
                                y: u.position.z,
                                size: 80,
                                rotation: r,
                                fill: "white",
                                stroke: {
                                    color: "black",
                                    width: 15
                                },
                                id: u.id,
                                netType: 0
                            })), void 0 !== t.elements[u.id] && (t.elements[u.id].x = a.x, t.elements[u.id].y = a.z, t.elements[u.id].rotation = r)
                        }
                        t.draw(), ce = performance.now()
                    }
                }, t
            })();
            y = new THREE.WebGLRenderer({
                antialias: !0,
                powerPreference: "high-performance"
            }), y.shadowMap.enabled = !0, y.shadowMap.type = THREE.PCFShadowMap, y.outputEncoding = THREE.LinearEncoding, y.toneMapping = THREE.NoToneMapping, document.body.appendChild(y.domElement), f = new THREE.Scene, o = new THREE.PerspectiveCamera(75, 1.8, .1, 300), o.position.set(0, 10, 0), b = new THREE.Raycaster, f.background = new THREE.Color(8251647), f.fog = new THREE.FogExp2(8251647, .007), E = new THREE.AmbientLight(16765613, .7), f.add(E), n = new THREE.AmbientLight(13952255, .3), f.add(n), m = new THREE.DirectionalLight(16768939, 1), m.position.set(0, 10, 20), f.add(m), i = new THREE.Mesh(new THREE.PlaneBufferGeometry(1.5 * e.worldsize, 1.5 * e.worldsize), he.sky), i.rotation.x = .5 * -Math.PI, i.position.set(.5 * e.worldsize, 90, .5 * e.worldsize), f.add(i), c = new THREE.Mesh(new THREE.SphereGeometry(2 * e.worldsize), he.sky), c.position.set(.5 * e.worldsize, 0, .5 * e.worldsize), f.add(c), (() => {
                const t = xt();
                let a = new THREE.PlaneBufferGeometry(1.5 * e.worldsize, 1.5 * e.worldsize);
                x = new t(a, {
                    textureWidth: 512,
                    textureHeight: 512,
                    waterNormals: F.water,
                    alpha: 1,
                    sunDirection: m.position.clone().normalize(),
                    sunColor: 16777215,
                    waterColor: 7695,
                    distortionScale: 1,
                    fog: f.fog
                }), x.rotation.x = .5 * -Math.PI, x.position.set(.5 * e.worldsize, 0, .5 * e.worldsize), f.add(x)
            })(), Ct(), ye();
            let a = y.domElement;
            p = a.getContext("webgl2"), p || (p = a.getContext("experimental-webgl")), d = p.canvas.width, l = p.canvas.height;
            let s = performance.now(),
                r = () => {
                    let e = performance.now();
                    x.material.uniforms.time.value += 1 / 60;
                    let a = Math.min((e - s) / 1e3, .1);
                    s = e, (e => {
                            for (const t of Object.values(T)) t.tick(e)
                        })(a),
                        function(e) {
                            let t = j.length;
                            for (; t--;) j[t].tick(e), j[t].deleteMe && j.splice(t, 1)
                        }(a), t.update(), requestAnimationFrame(r), y.clear(), y.render(f, o)
                };
            y.getContext().canvas.addEventListener("webglcontextlost", (e => {
                e.preventDefault(), cancelAnimationFrame(r)
            }), !1), r()
        },
        Pt = () => {
            null != f && f !== [] && f !== {} && "" !== f && we(f, (e => {
                if (null != e && e !== [] && e !== {} && "" !== e) {
                    if (e instanceof THREE.Mesh)
                        for (let t in L) L[t] === e && (f.remove(e), delete L[t]);
                    if (e instanceof THREE.Line)
                        for (let t in D) D[t] === e && (f.remove(e), D[t].geometry.dispose(), delete D[t])
                }
            }))
        },
        Ht = () => {
            for (let e in T) T.hasOwnProperty(e) && T[e].onDestroy();
            T = {}, u = void 0
        };
    $(document).ready((() => {
        "localhost" !== window.location.hostname && ((() => {
            let e = document.createElement("div");
            e.innerHTML = "&nbsp;", e.className = "adsbox", document.body.appendChild(e), window.setTimeout((() => {
                0 === e.offsetHeight && (U = !0), e.remove(), U && $("#disable-adblock-message").show()
            }), 1e3)
        })(), (() => {
            var e = e || {};
            e.cmd = e.cmd || [], e.cmd.display = e.cmd.display || [], e.cmd.display.push((() => {
                aipDisplayTag.display("krew-io_300x250"), aipDisplayTag.display("krew-io_300x250_2")
            })), e.gdprShowConsentTool = !0, e.gdprShowConsentToolButton = !0, Ze(), "undefined" != typeof aipPlayer ? window.adplayerCentered = new aipPlayer({
                AD_WIDTH: 560,
                AD_HEIGHT: 315,
                AD_FULLSCREEN: !1,
                PREROLL_ELEM: document.getElementById("preroll-centered"),
                AIP_COMPLETE: () => {},
                AIP_REMOVE: () => {}
            }) : console.log("Aipplayer is not defined, skipped showing video ads")
        })(), (!window.location.hostname.endsWith("krew.io") || null != window.parent && window.location != window.parent.location || null != window.frameElement || self != top) && $("#play-on-krewio-message").show(), $("#goto-krew-io").on("click", (() => top.location.href = "https://krew.io"))), console.log("\n\n\n\n██╗  ██╗██████╗ ███████╗██╗    ██╗   ██╗ ██████╗\n██║ ██╔╝██╔══██╗██╔════╝██║    ██║   ██║██╔═══██╗\n█████╔╝ ██████╔╝█████╗  ██║ █╗ ██║   ██║██║   ██║\n██╔═██╗ ██╔══██╗██╔══╝  ██║███╗██║   ██║██║   ██║\n██║  ██╗██║  ██║███████╗╚███╔███╔╝██╗██║╚██████╔╝\n╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝ ╚═════╝\n\nKrew Client v2\n\n\n\n\n"), St(), nt.setListeners(), $.ajax({
            url: `${window.location.href.replace(/\?.*/,"").replace(/#.*/,"").replace(/\/$/,"")}/api/servers`,
            dataType: "json",
            type: "GET",
            success: function(e) {
                nt.servers = e;
                let t = !1;
                $("#server-select").html("");
                let a, o = 0;
                for (a in e) {
                    let i = e[a];
                    o++;
                    let s = $("<option/>", {
                        html: `Server ${o} (${i.playerCount}/${i.maxPlayerCount})`,
                        value: a
                    });
                    $("#server-select").append(s), !t && i.playerCount < i.maxPlayerCount && ($("#server-select").val(a), t = !0)
                }
                let i = ke();
                i.sid && $("#server-select").val(i.sid)
            }
        }), $.get("/api/wall-of-fame", ((e, t) => {
            if ("success" === t) {
                let t = "";
                for (const a in e) {
                    let o = e[a].highscore;
                    const i = "" !== e[a].clan ? `[${e[a].clan}]` : "";
                    o >= 1e3 && o.toString().length <= 6 ? o = o / 1e3 + " K" : o.toString().length >= 7 && (o = Math.floor(o / 1e3) / 1e3 + " M"), t = a <= 2 ? `<tr class="wof-player-top-${0===parseInt(a)?1:2}"><td class="rank">${parseInt(a)+1}</td><td>${e[a].username}</td><td>${i}</td><td>${o}</td></tr>` : a <= 24 ? `<tr><td class="rank">${parseInt(a)+1}</td><td>${e[a].username}</td><td>${i}</td><td>${o}</td></tr>` : `<tr class="top50" style="display:none"><td class="rank">${parseInt(a)+1}</td><td>${e[a].username}</td><td>${i}</td><td>${o}</td></tr>`, $("#wall-of-fame-table").append(t)
                }
            }
        })), $(window).on("unload", (() => {
            w && w.close()
        }))
    }));
    let Lt = function(t) {
            if (void 0 !== w) return;
            ke().pid && nt.serverList[ke().pid] && (t = ke().pid);
            let a = nt.servers[t],
                o = "localhost" === window.location.hostname ? "http://localhost" : e.url;
            80 !== parseInt(a.port) && (o += `:${a.port}`), w = io.connect(o, {
                secure: !0,
                rejectUnauthorized: !1,
                withCredentials: !0
            }), Dt(), r = new pt, document.onkeydown = dt, document.onkeyup = ct, $("#game-ui").show(), $("#splash-modal").modal("hide"), console.log(`\n\nSuccessfully connected!\nGood luck sailor! ⛵\n\nConnection information:\nPort: ${a.port}\nPlayers: ${a.playerCount}\nMax Players: ${a.maxPlayerCount}\n\n\n`)
        },
        Dt = () => {
            w.on("handshake", (e => {
                console.log("Jumped into handshake!"), $(window).on("beforeunload", (() => "Do you really want to leave your ship and lose your progress?")), Ht(), u = void 0, O = e.socketId, w.emit("cp047lkl2", {
                    boatId: ke().bid,
                    name: ze.username ?? void 0,
                    password: ze.password ?? void 0,
                    spawn: rt()
                }), G = 0, w.on("startGame", (() => {
                    st("hide"), Oe("Use WASD to move. Press space to jump. Left click to shoot/fish. Use 1, 2, and 3 to switch tools. For more help click the help icon above. Good luck, Sailor!", 4, 2e4), c()
                }));
                let a, o, i = [],
                    s = !1,
                    n = 0,
                    l = 0,
                    d = !1,
                    c = () => {
                        !s && i[0] && $("#ping-wrapper > span").text("LOST CONNECTION"), a = Date.now(), s = !1, w.emit("ping")
                    };
                setInterval(c, 1e4), w.on("pong", (() => {
                    let e = Date.now() - a;
                    i.push(e), s = !0, i.length > 3 && i.shift(), $("#ping-wrapper > span").text(`${Math.round(i.reduce(((e,t)=>e+t))/i.length)} MS`)
                })), w.on("playerNames", (e => {
                    P = e
                })), w.on("s", (e => {
                    e = JSON.parse(LZString.decompress(e));
                    for (let t in e) be(t, e[t])
                })), w.on("disconnect", Ht), w.on("end", je), w.on("scores", (e => {
                    (e => {
                        let a = e.players,
                            o = e.boats;
                        if (!u || !u.parent || !T) return;
                        if (T && (u = T[O]), e.boats.length > 0)
                            for (let t in e.boats) {
                                if (!u.parent) return;
                                e.boats[t] && e.boats[t].id === u.parent.id && (u.parent.overall_kills = e.boats[t].ok, u.parent.overall_cargo = e.boats[t].oc)
                            }
                        o.forEach((e => {
                            void 0 !== T[e.id] && T[e.id].setName(e.cN)
                        }));
                        let i = o.filter((e => {
                            if (u.parent) return e.id === u.parent.id
                        })).pop();
                        if (u.parent && i) {
                            nt.captainUiConfiguration.active = i.cI === u.id, nt.updateCaptainUi();
                            let e = 0;
                            for (let t in i.players) e += i.players[t].cargoUsed;
                            $(".ship-cargo").html(`${e} / ${t[u.parent.shipclassId].cargoSize}`), $(".my-krew-name").text(u.parent.crewName)
                        } else $(".ship-cargo").html(" / "), $(".my-krew-name").html("Join a krew or buy a ship").css("fontSize", 17);
                        a.sort(((e, t) => t.g - e.g));
                        let s, r = a.slice(0, 15),
                            n = 0,
                            l = r.length,
                            d = `${a.length} players`,
                            c = $('<div id="player-leaderbord-data"/>');
                        if (u)
                            for (; n < 15 && n < l; n++) {
                                let e, t, a = r[n].sS,
                                    o = r[n].d,
                                    i = r[n].l;
                                s = void 0 !== r[n].c && "" !== r[n].c ? `[${r[n].c}]` : "", e = r[n].s >= 1050 && r[n].s.length <= 6 ? `${Math.floor((r[n].s-50)/1e3)} K` : r[n].s - 50, t = r[n].g >= 1e3 && r[n].g.toString().length <= 6 ? `${Math.floor(r[n].g/1e3)} K` : r[n].g.toString().length >= 7 ? Math.floor(r[n].g / 1e3) / 1e3 + " M" : r[n].g;
                                let l = $(`<div style="max-width: 100%; grid-column: 1;"${r[n].id===u.id?' class="text-success"':""}>${n+1}.</div><div style="grid-column: 2"><span class="playerName${r[n].id===u.id?' text-success"':'"'}" style="margin-left:2px;font-size: 13px"></span></div><div style="grid-column: 3"><span${r[n].id===u.id?' class="text-success"':""}>${s}</span></div><div style="grid-column: 4"><span${r[n].id===u.id?' class="text-success"':""}>${i}</span></div><div style="grid-column: 5"><span${r[n].id===u.id?' class="text-success"':""}>${a}</span></div><div style="grid-column: 6"><span${r[n].id===u.id?' class="text-success"':""}>${o}</span></div><div style="grid-column: 7"><span${r[n].id===u.id?' class="text-success"':""}>${e}</span></div><div style="grid-column: 8; text-align: right"><span${r[n].id===u.id?' class="text-success"':""}>${t}</span></div>`);
                                l.find(".playerName").text(r[n].n), c.append(l)
                            }
                        $("#playerScoreData").html(c), $("#player-count").html(d), e.boats.sort(((e, t) => t.g - e.g));
                        let p, m = e.boats.slice(0, 10),
                            h = $('<div id="leaderboard-data-div"/>'),
                            g = 0,
                            b = m.length;
                        if (u.parent)
                            for (; g < 10 && g < b; g++) {
                                p = `${e.boats.length} boats`;
                                let t = m[g].ok,
                                    a = m[g].oc;
                                s = void 0 !== m[g].c && "" !== m[g].c ? `[${m[g].c}]` : "";
                                let o, i = m[g].oql;
                                o = m[g].g >= 1e3 && m[g].g.toString().length <= 6 ? `${Math.floor(m[g].g/1e3)} K` : m[g].g.toString().length >= 7 ? Math.floor(m[g].g / 1e3) / 1e3 + " M" : m[g].g;
                                let r = $(`<div${m[g].id===u.parent.id?' class="text-success grid-left"':' class="grid-left"'}>${s}</div><div style="max-width: 100%;"${m[g].id===u.parent.id?' class="text-success grid-middle"':' class="grid-middle"'}><span class='krewName' style='margin-left:2px;font-size: 13px'></span></div><div class="grid-middle"><img src="/assets/img/medals/medal_${a>=15e4?"gold":a>=5e4?"silver":"bronze"}.png"${a>=12e3?' style="height: 17px"':'style="height: 17px; display:none"'}><img src="/assets/img/medals/medal_${t>=50?"gold":t>=20?"silver":"bronze"}.png"${t>=10?' style="height: 17px"':'style="height: 17px; display:none"'}><img src="/assets/img/medals/medal_${3===i?"gold":2===i?"silver":"bronze"}.png"${i>0?' style="height: 17px"':'style="height: 17px; display:none"'}></div><div${m[g].id===u.parent.id?' class="text-success grid-right"':' class="grid-right"'}>${o}</div>`);
                                r.find(".krewName").text(m[g].cN), h.append(r)
                            }
                        $("#leaderboard-data").html(h), $("#boat-count").html(p);
                        let y = [],
                            f = 0,
                            v = $("<div/>");
                        for (let e in a) void 0 !== T[a[e].id] && T[a[e].id].setName(a[e].n), u.parent && a[e].pI === u.parent.id && y.push({
                            key: e,
                            value: a[e]
                        });
                        y.sort(((e, t) => e.value.s - t.value.s));
                        for (let e in y) {
                            let t = y[e].value,
                                a = '<div class="player-list-item">';
                            if (a += `${t.n}${t.id===O?" (ME)":""}`, a += '<span class="float-sm-right">', t.id === O && void 0 !== u.goods) {
                                for (let e in u.goods) u.goods[e] > 0 && (a += ` ${u.goods[e]} ${e}`);
                                a += ` <i class="text-warning icofont icofont-cube"></i> ${t.cU}`
                            } else a += ` <i class="text-warning icofont icofont-cube"></i> ${t.cU}`;
                            t.id !== O && !0 === u.isCaptain && (a += `<span class="btn btn-danger btn-kick-player float-right" data-event="kick" data-id="${t.id}"><i data-event="kick" data-id="${t.id}" class="icofont icofont-delete"></i></span><span class="btn btn-warning btn-transfer-ship float-right" data-event="transfer" data-id="${t.id}"><i data-event="transfer" data-id="${t.id}" class="icofont icofont-ship-wheel"></i></span>`), a += "</span>", a += "</div>";
                            let o = $(a);
                            o.prepend($("<span/>", {
                                class: "icofont icofont-ship-wheel text-warning",
                                text: " ",
                                style: "opacity: " + (u.parent.captainId === t.id ? 1 : 0)
                            })), t.id === O && (o.addClass("text-success"), nt.checkGoldDelta(t.g), u.clan = t.c, u.clanLeader = t.cL, u.clanOwner = t.cO, u.clanRequest !== t.cR ? (u.clanRequest = t.cR, Ue.setClanData("force")) : u.clanRequest = t.cR, u.gold = parseInt(t.g), u.gold >= V && (V *= 2), u.score = parseInt(t.s), u.shipsSank = parseInt(t.sS), u.overall_cargo = parseInt(t.oc)), v.append(o), f++
                        }
                        u.parent && (e => {
                            if (u && u.parent && 1 === u.parent.netType) {
                                $(".ship-hp").html(u.parent.hp), $(".ship-max-hp").html(u.parent.maxHp), $("#ship-name").html(t[u.parent.shipclassId].name), $(".ship-speed").html(u.parent.speed.toFixed(1));
                                let a = t[u.parent.shipclassId].cargoSize;
                                $("#cargo-size").html(a), $(".ship-krew-count").html(e.krewCount), $(".ship-max-capacity").html(t[u.parent.shipclassId].maxKrewCapacity)
                            } else $(".ship-hp").html(""), $(".ship-max-hp").html(""), $("#ship-name").html(""), $("#cargo-size").html(""), $(".ship-krew-count").html(""), $(".ship-max-capacity").html(""), $(".ship-speed").html("/")
                        })({
                            krewCount: f
                        }), $("#krew-list").html(v)
                    })(e = JSON.parse(LZString.decompress(e)))
                })), w.on("setBankData", (e => {
                    (e => {
                        e.warn ? ($("#bankContainer").hide(), $("#nabankContainer").show()) : ($("#bankContainer").show(), $("#nabankContainer").hide(), $("#my-deposits").text(e.my), $("#make-deposit").attr({
                            max: u.gold
                        }), $("#take-deposit").attr({
                            max: e.my
                        }))
                    })(e)
                })), w.on("updateKrewsList", (() => {
                    Je()
                })), w.on("cargoUpdated", (() => {
                    $("#buy-goods").hasClass("active") && Ye.getList()
                })), w.on("enterIsland", (e => (e => {
                    e.captainId === O && u && u.parent && 2 !== u.parent.shipState && $("#docking-modal").show(), $("#toggle-shop-modal-button").hasClass("enabled") && $("#docking-modal").hide(), u && Rt.changeMusic("island", !1)
                })(e))), w.on("showIslandMenu", (() => at())), w.on("exitIsland", (e => (e => {
                    r.lockMouseLook(), e.captainId === O && ($("#docking-modal").hide(), $("#departure-modal").hide()), nt.hideSuggestionBox = !0, u && Rt.changeMusic("ocean", !1), $("#toggle-bank-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button").attr("data-tooltip", "Bank is available at Labrador"), $("#exit-island-button").hide(), nt.closeAllPages(), ot(), $("#docking-modal-button").removeClass("btn btn-primary enabled btn-lg").addClass("btn btn-primary disabled btn-lg"), $("#toggle-shop-modal-button").removeClass("btn btn-md enabled toggle-shop-modal-button").addClass("btn btn-md disabled toggle-shop-modal-button"), $("#toggle-krew-list-modal-button").removeClass("btn btn-md enabled toggle-krew-list-modal-button").addClass("btn btn-md disabled toggle-krew-list-modal-button")
                })(e))), w.on("showAdinplayCentered", (() => et())), w.on("departureWarning", (() => {
                    $("#toggle-krew-list-modal-button").hasClass("enabled") && ($("#toggle-krew-list-modal-button").addClass("glowing"), setTimeout((() => {
                        $("#toggle-krew-list-modal-button").removeClass("glowing")
                    }), 5e3))
                })), w.on("showCenterMessage", ((e, t, a) => {
                    nt && Oe && Oe(e, t || 3, a), e.startsWith("Achievement trading") && $("#shopping-modal").hide()
                })), w.on("showKillMessage", (e => {
                    nt && _e && _e(e)
                })), w.on("showDamageMessage", ((e, t) => {
                    nt && Ve && (2 === t && Rt.playAudioFile(!1, !0, 1, "cannon-hit"), Ve(e, t), n = Date.now(), d || (l >= 1 && Date.now() - n < 2e4 ? (d = !0, l = 0, Rt.changeMusic("battle", !1)) : l++))
                })), setInterval((() => {
                    d && Date.now() - n > 2e4 && (d = !1, u && u.parent && (3 === u.parent.shipState || 4 === u.parent.shipState) ? Rt.changeMusic("island", !0) : Rt.changeMusic("ocean", !0))
                }), 2e4), w.on("showAdminMessage", (e => {
                    nt && Ne && Ne(e)
                })), w.on("levelUpdate", (e => {
                    void 0 !== T[e.id] && 0 === T[e.id].netType && (T[e.id].level = e.level, e.id === O && (Rt.playAudioFile(!1, !0, .9, "level-up"), u.updateExperience(), u.notifiscationHeap[Math.random().toString(36).substring(6, 10)] = {
                        text: "Level Up!",
                        type: 2,
                        isNew: !0
                    }))
                })), w.on("clanMarker", (e => {
                    let t = Math.random().toString(36).substring(6, 10);
                    I[t] = e
                })), void 0 !== o && (clearInterval(o), o = void 0), o = setInterval((() => {
                    u && (e = u.getDelta()) && w.emit("u", e)
                }), 100)
            })), w.on("chat message", (t => {
                if (u && u.parent && (u.parent.hasChild(t.playerId) || "global" === t.recipient || "local" === t.recipient || "clan" === t.recipient || "staff" === t.recipient) && void 0 !== T[t.playerId]) {
                    let a = "global-chat",
                        o = $("#chat-history");
                    a = "global" === t.recipient ? "global-chat" : "local" === t.recipient ? "local-chat" : "staff" === t.recipient ? "staff-chat" : "clan-chat";
                    let i, s = void 0 !== u && void 0 !== u.parent && 1 === u.parent.netType && void 0 !== T[t.playerId].parent && 1 === T[t.playerId].parent.netType,
                        r = e.Admins.includes(t.playerName),
                        n = e.Mods.includes(t.playerName),
                        l = e.Helpers.includes(t.playerName),
                        d = e.Designers.includes(t.playerName),
                        c = t.playerId === O,
                        p = "" !== u.clan && void 0 !== u.clan && u.clan === T[t.playerId].clan && !c,
                        m = s && u.parent.id === T[t.playerId].parent.id && T[u.parent.id].captainId === t.playerId,
                        h = s && u.parent.id === T[t.playerId].parent.id;
                    i = r ? "admin-color" : n ? "mod-color" : l ? "helper-color" : d ? "designer-color" : c ? "myself-color" : p ? "clan-color" : m ? "captain-color" : h ? "krewmate-color" : "white";
                    let g = $("<div/>", {
                            text: `${(t.playerClan?`[${t.playerClan}] `:"")+(r?"[Admin] ":n?"[Mod] ":l?"[Helper] ":d?"[Designer] ":"")+t.playerName}: ${t.message}`,
                            class: `${a} text-${i}`
                        }),
                        b = ["staff-chat", "clan-chat", "local-chat", "global-chat"];
                    for (let e = 0; e < b.length; e++) {
                        let t = b[e];
                        $(`.${t}`).length > 15 && $(`.${t}`).first().remove()
                    }
                    "global" !== t.recipient || ee || ($("#global-chat-alert").show(), g.hide()), "local" !== t.recipient || Z || ($("#local-chat-alert").show(), g.hide()), "clan" !== t.recipient || Q || ($("#clan-chat-alert").show(), g.hide()), "staff" !== t.recipient || X || ($("#staff-chat-alert").show(), g.hide());
                    let y = !1;
                    $(o).scrollTop() + $(o).innerHeight() >= $(o)[0].scrollHeight && (y = !0), o.append(g), !0 === y && o.scrollTop((function() {
                        return this.scrollHeight
                    }))
                }
            })), w.on("clear", (() => {
                $(".global-chat").remove()
            })), w.on("clearPlayerMessages", (e => {
                const t = document.querySelectorAll(".global-chat");
                for (const a of t) a.innerHTML.includes(`${e}: `) && a.remove()
            })), w.on("cycle", (e => {
                "day" === e ? Tt(0) : "night" === e && Tt(1)
            }))
        }
})();