import { generateTheme } from '@atlaskit/atlassian-navigation';
import { colors } from '@atlaskit/theme';

export const appTheme = generateTheme({ 
  name: 'high-contrast', 
  // name: 'atlassian', 
  backgroundColor: colors.N900, 
  highlightColor: colors.B50,
  // highlightColor: colors.Y300
});
