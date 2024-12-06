import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  rowMe: {
    padding: 16,
    borderRadius: 8,
  },
  badge: {
    width: 28,
    height: 28,
  },
  textBadge: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.purpleDark,
    marginRight: 8,
  },
  textName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.purpleDark,
    fontFamily: 'archivo',
  },
  textXP: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.purpleLight,
    fontFamily: 'archivo',
  },
});
