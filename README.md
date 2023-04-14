# Godform: Divine Warfare

Currently very early in production; excuse the disorganized and limited info!

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"For milennia, you humans ruled over the gifts we had given you. You shaped your Earth to your image as we had shaped you to ours. But you became greedy and arrogant, and humanity blinded itself to the destructive force it had become.
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Soon, little was left of your kind, and the planet we had gifted eons ago was left in ruins. We decided it was our time to restore the damage in our way: we the gods, we the demigods, we the beings you told stories about but often refused to know.
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"There was only the question left of how to allocate the world among us. Who would get what, were, and how much? Discussions became debates, debates became arguments, and before long the scarred remains of Earth you'd left behind became host to an all-out war. A war amongst the gods, in all our myriad forms."

## Basic Premise

Godform is a digital trading card game (dTCG) and automation game hybrid, with the theme of "Gods and mythical creatures battling for control of Earth after a human-induced apocalypse".

Cards represent gods, creatures, locations, divine dictates, and spiritual/mystical artifacts. The goal is to force your opponent to have no more cards left in their deck before they do the same to you, representing "running out of reinforcements".

Resources used to perform actions in the card game are generated through your design of your World Automation, Factorio-ish style. They "tick" each turn and each round, with different buildings and pathways producing different things in diferent amounts of time/ticks. So your automation design can be a crucial way to get a resource advnatage over your opponents in the card game.

Winning games earns Devotion, which you can use to purchase upgrades and new buldings in the World Automation, thus completing the cycle between the two main pieces of the game.

## Resources

The following resources are generated and collected by your World Automation over the turns of a battle. Each battle, you start with initial small amounts of resources; they do not carry from one battle to another.
* Worship - Basic currency, mostly for playing cards and using non-attack abilities.
* Blood - Used for attacks
* Vitality - Used for healing
* Loyalty - Used for special abilities of minions when your Godhead attacks

## Battles

A battle, i.e. a match of the card game, consists of 1v1 players on the Frontlines, i.e. the board. The Frontlines consist of five lanes: four Minion lanes and one Godhead lane. These are where you'll play your soldiers. Only God cards may be played in the center Godhead lane, but any soldiers may be played in any of the other lanes (including other Gods). You may only have one soldier in a lane at a time, though you may discard as many soldiers as you want in a turn to make room, if you have the Blood to pay for that. (You pay the soldier's Worshop cost in Blood to discard it.)

On your turn, you may play as many cards, make as many attacks, discard as many soldiers from the Frontlines, heal as many soldiers, and use as many abilities as you have the resources for. Attacks will have both soldier damage ❤️ and discard damage 🃏. These cost an amount of Blood equal to their soldier damage to use. If your opponent has a soldier in the same lane and an active Godhead, your attack will deal its soldier damage to it, killing it if it's more than its Strength. If there's no opposing soldier, your opponent must Desert the amount of the discard damage (that is, they must discard that many cards from the top of their deck). Some soldiers may have evasion abilities that led them deal discard damage even with an opposing soldier in the way. IF your opponent does not have an active Godhead, you may choose for your attack to deal its discard damage directly, bypassing opposing soldiers entirely.

At the end of your turn, you always draw one card. If you can't, due to having no cards left in your deck, you lose the battle.

Turn structure, therefore, is as follows:
1. Heal (optional - requires Vitality)
2. Discard from Battlefield (optional - requires Blood)
3. Play cards (optional - requires Worship)
4. Use abilities and attacks in any order (optional - requires Worship, Loyalty, and Blood, depending on the abilities)
5. Draw (REQUIRED)

## Card Types
### Strategies
Soldier cards are each associated with a particular Strategy, representing both an aspect of that creature or god, as well as the types of effects they may have on the game. Gods can have multiple (see "Gods" below). The strategies are as follows:
* _Wrath:_ Deals lots of damage and instantly destroys things.
* _Trickery:_ Manipulates the board state or information.
* _Protection:_ Prevents damage and performs healing.
* _Fertility:_ Generates extra resources, and steals resiurces from your opponent.
* _Creation:_ Generates tokens and returns cards from discard.
### Gods
 Gods may be played in any lane, including the center Godhead lane. They have multiple forms, each associated with a particular Strategy. You may only change a God's form if it is currently your Godhead, and only once per turn. Each form may have its own Strength and abilities.

 ### Minions
 Minions are non-god creatures from mythology. They cannot be played in the Godhead lane, but can be played in any of the others, as long as the lane is empty. They may have Loyalty🔗 abilities that will trigger if your Godhead attacks, if you have enough Loyalty for them. If multiple Loyalty🔗 abilities trigger at the same time, you may choose the order they happen.

 ### Terrain
 In the middle of each lane is a spot for a Terrain card. You may only play one Terrain per lane, but you can cover up one that exists there already with a new one. Covered Terrain is inactive; only the top Terrain at a lane applies its effects. Terrain may change how its particular lane behaves, or even the entire game.

### Relics
These mystical artifacts can be attached to soldiers, and apply effects to the soldier they're attached to. Relics marked Cursed can only be attached to the opponents' soldiers, while normal relics can only be attached to your own soldiers. A solder can have at most one relic attached to it at a time, but you may discard relics you own in the same way as you'd discard soldiers, by paying their Worship cost in Blood.

### Edicts
These are one-off effects. You play them, their effect triggers, and once it's done you discard the card.

## World Automation
In World Automation mode, you can at any time enable Omniscience Mode, which simulates ticks (turns and rounds) on your current automation. _It DOES NOT generate anything,_ it only simulates to show you how things are working.
### Terrain
In the World Automation section, you get RNG terrain (you may set the seed... maybe). Different buildings can be placed only on certain terrain. The terrain is as follows:
* _Water:_ Vital Fonts and Drains can only be placed here.
* _Mountains:_ Vital Stills and Monastaries can only be placed here.
* _Grassland:_ Altars and Temples can only be placed here.

### Weather
You can use Devotion to buy weather, which can be placed over any tiles. Weather is a single-use buff: sources under weather produce Strategy-type resources, which count double for their respective Strategy, but the weather will dissipate after its turn counter ticks down to zero. (They should last about 3-5 entire battles.) The weather options, and the strategies they buff, are as follows:
* _Fog:_ Trickery
* _Storm:_ Wrath
* _Sun:_ Protection
* _Drizzle:_ Fertility
* _Aurora:_ Creation

### Structures
You also use Devotion to buy and upgrade structures for generating, collecting, and transferring resources:
* _Temples_ generate Worship, _Channels_ collect Worship for your battles, _Laylines_ transfer Worship and Loyalty, and _Reliquaries_ convert Worship into XP used to upgrade cards you've played after each battle. (XP applies double if you win the battle.)
* _Altars_ generate Blood, _Sanguine Leylines_ transfer Blood and Vitality, and _Drains_ collect Blood for your battles.
* _Vital Stills_ convert Blood into Vitality, _Vital Fonts_ collect Vitality for your battles.
* _Monastaries_ convert Worship into Loyalty, _Shrines_ collect Loyalty for your battles.

## Potential Keyworded Abilities
_**ALL** are subject to WIP change!_
* _Deicidal:_ Can attack opposing Godheads regardless of lane.
* _Tactical:_ If its attack kills an opposing soldier, you can choose to additionally deal its discard damage directly.
* _Taunting:_ Opposing soldier must attack each turn if able.
* _Homeland:_ (On a Terrain card.) Effects only apply to cards that share a pantheon with this Terrain.
* _Blessed:_ (On Terrain card.) Effects only apply to cards controlled by the person who played this Terrain.
* _Protective:_ (On a Terrain card.) Effects only apply to cards not controlled by the person who played this Terrain.
* _Reactive:_ (On an Edict card.) Can only play this card after a certain trigger occurs, but may play it *immediately,* even on your opponent's turn.
* _BLoodthirsty:_ If its attack kills an opposing soldier, it deals half its soldier damage to the adjacent soldiers as well.
* _Oblivious:_ Ignores Terrain effects.