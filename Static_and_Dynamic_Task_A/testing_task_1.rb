
class CardGame

 # attr_reader missing
 # initialize def missing



  def checkforAce(card)
  # method should be written check_for_ace(card)
    if card.value = 1
  # if requires a double equals sign (==)
      return true
    else
      return false
    end
  end



  dif highest_card(card1 card2)
  # dif should be def
  # a comma should separate the parameters card1 and card2
  if card1.value > card2.value
    return card
  # should be return card1.value
  else
    return card2
  # should be return card2.value
  end
end
  # indentation incorrect, if,else,end should be in line with the f of def.
  # end for def should be inline with def
  #
end
 # an extra end which should be deleted.



  def self.cards_total(cards)
  # should not be a class method.
    total
  # total needs to be initialized to zero
    for card in cards
      total += card.value
      return "You have a total of" + total

    end

  # return should be moved here and it should be "You should have a total of #{total}" and be inline with the for.


  end


  # should be another end to end the class
