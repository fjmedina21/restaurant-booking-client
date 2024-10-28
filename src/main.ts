import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base'
import { AppModule } from './app/app.module';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1JpRHxbf1x0ZFNMYVRbQXNPIiBoS35RckRjW3pfeHVdQ2VVV0Zz'); // Add your Syncfusion license key here
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
