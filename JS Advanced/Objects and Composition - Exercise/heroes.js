function solve() {

    return {

        mage: function (heroeName) {

            return {

                name: heroeName,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    this.mana--;
                    console.log(`${heroeName} cast ${spell}`);
                }

            }

        },

        fighter: function (heroeName) {

            return {

                name: heroeName,
                health: 100,
                stamina: 100,
                fight: function () {
                    this.stamina--;
                    console.log(`${heroeName} slashes at the foe!`);
                }
            }

        }

    }

}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
