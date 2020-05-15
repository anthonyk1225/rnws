export default {
  flex: {
    flex: 1,
  },

  // ALIGN VERTICALLY
  // START CONTENT ON THE TOP
  colTopLeft: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  colTopCenter: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  colTopRight: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  colTopStretch: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  // HAVE CONTENT CENTERED
  colCenterLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  colCenterCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colCenterRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  colCenterStretch: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  // HAVE CONTENT END ON THE BOTTOM
  colBottomLeft: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  colBottomCenter: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  colBottomRight: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  colBottomStretch: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },

  // GIVE ALL CONTENT EQUAL SPACING AROUND ITEMS
  colEvenlyLeft: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  colEvenlyCenter: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  colEvenlyRight: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  colEvenlyStretch: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },

  // HAVE ITEMS START ON TOP, END ON BOTTOM AND SPACE BETWEEN ALL OTHER ITEMS
  colBetweenLeft: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  colBetweenCenter: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colBetweenRight: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  colBetweenStretch: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  // ITEMS ARE SPACED BY 1 UNIT ON THE TOP AND BOTTOM.
  // ALL OTHER ITEMS ARE EVENLY SPACED BETWEEN EACH OTHER
  colAroundTop: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  colAroundBottom: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  colAroundCenter: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  colAroundStretch: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },

  // ALIGN HORIZONTALLY
  // START CONTENT ON THE LEFT
  rowLeftTop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowLeftBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  rowLeftCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowLeftStretch: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  // CENTER ALL CONTENT
  rowCenterTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rowCenterBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rowCenterCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenterStretch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  // HAVE ALL CONTENT END ON THE RIGHT
  rowRightTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  rowRightBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rowRightCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rowRightStretch: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },

  // GIVE ALL CONTENT EQUAL SPACING AROUND ITEMS
  rowEvenlyTop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  rowEvenlyBottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  rowEvenlyCenter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rowEvenlyStretch: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },

  // HAVE ITEMS START ON LEFT, END ON RIGHT AND SPACE BETWEEN ALL OTHER ITEMS
  rowBetweenTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rowBetweenBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  rowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowBetweenStretch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  // ITEMS ARE SPACED BY 1 UNIT IN THE START AND END.
  // ALL OTHER ITEMS ARE EVENLY SPACED BETWEEN EACH OTHER
  rowAroundTop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  rowAroundBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  rowAroundCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowAroundStretch: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
};
