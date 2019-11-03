require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game')
require_relative('../card')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("Hearts", 1)
    @card2 = Card.new("Spades", 8)
    @card3 = Card.new("Clubs", 5)
    @card4 = Card.new("Diamond", 3)
    @cards = [@card1, @card2, @card3, @card4]
    @card_game = CardGame.new
  end

  def test_check_for_ace
    assert_equal(true, @card_game.check_for_ace(@card1))
  end

  def test_highest_card
    assert_equal(8, @card_game.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 17", @card_game.cards_total(@cards))
  end
end
